/**
 * ===========================================================================
 * MESSAGE SERIALIZER & JID/LID UTILITY MODULE
 * ===========================================================================
 */

const { jidDecode, getContentType, downloadContentFromMessage } = require('@whiskeysockets/baileys');

// In-memory cache for fast LID to JID lookups
const lidToJidCache = new Map();

/**
 * Decodes JID strings into standard formatted strings
 * @param {string} jid 
 * @returns {string}
 */
function decodeJid(jid) {
    if (!jid) return jid;
    if (/:\d+@/gi.test(jid)) {
        const decode = jidDecode(jid) || {};
        return (decode.user && decode.server && `${decode.user}@${decode.server}`) || jid;
    }
    return jid;
}

/**
 * Converts a @lid JID to standard @s.whatsapp.net JID
 * @param {Object} conn - Baileys connection socket
 * @param {Object} store - Baileys InMemoryStore instance
 * @param {string} lidJid - Target JID to convert
 * @returns {Promise<string>}
 */
async function convertLidToJid(conn, store, lidJid) {
    if (!lidJid) return lidJid;
    const cleanLid = decodeJid(lidJid);
    
    if (!cleanLid.endsWith('@lid')) {
        return cleanLid; // Already a standard JID
    }

    // Check memory cache
    if (lidToJidCache.has(cleanLid)) {
        return lidToJidCache.get(cleanLid);
    }

    try {
        // Search contacts stored in memory
        if (store && store.contacts) {
            for (const [jid, contact] of Object.entries(store.contacts)) {
                if (contact && (contact.lid === cleanLid || contact.id === cleanLid)) {
                    lidToJidCache.set(cleanLid, jid);
                    return jid;
                }
            }
        }
        return cleanLid;
    } catch (err) {
        console.error('[LID CONVERT ERROR]', err);
        return cleanLid;
    }
}

/**
 * Normalizes user inputs or text into clean standard JID
 * @param {string} text 
 * @returns {string}
 */
function parseJid(text) {
    if (!text) return '';
    const cleaned = text.replace(/[^0-9]/g, '');
    return cleaned.length > 0 ? `${cleaned}@s.whatsapp.net` : text;
}

/**
 * Serializes raw Baileys messages into clean, accessible objects
 * @param {Object} conn - Baileys connection socket
 * @param {Object} msg - Raw message object
 * @param {Object} store - Baileys store instance
 * @returns {Promise<Object>}
 */
async function serializeMessage(conn, msg, store) {
    if (!msg) return msg;
    const m = {};

    if (msg.key) {
        m.key = msg.key;
        m.id = msg.key.id;
        m.isBaileys = m.id.startsWith('BAE5') || m.id.length === 16;
        m.chat = decodeJid(msg.key.remoteJid);
        m.fromMe = msg.key.fromMe;
        m.isGroup = m.chat.endsWith('@g.us');
        m.sender = decodeJid(m.fromMe ? conn.user.id : (m.isGroup ? msg.key.participant : m.chat));

        // Resolve LID if sender uses LID
        if (m.sender.endsWith('@lid')) {
            m.senderLid = m.sender;
            m.sender = await convertLidToJid(conn, store, m.sender);
        }
    }

    if (msg.message) {
        m.message = msg.message;
        m.type = getContentType(msg.message);
        m.msg = (m.type === 'viewOnceMessage') 
            ? msg.message[m.type].message[getContentType(msg.message[m.type].message)]
            : msg.message[m.type];

        // Extract body text across all message types
        m.body = (m.type === 'conversation') ? msg.message.conversation :
                 (m.type === 'imageMessage') ? msg.message.imageMessage.caption :
                 (m.type === 'videoMessage') ? msg.message.videoMessage.caption :
                 (m.type === 'extendedTextMessage') ? msg.message.extendedTextMessage.text :
                 (m.type === 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId :
                 (m.type === 'listResponseMessage') ? msg.message.listResponseMessage.singleSelectReply.selectedRowId :
                 (m.type === 'templateButtonReplyMessage') ? msg.message.templateButtonReplyMessage.selectedId : '';

        // Handle Quoted Messages cleanly
        const quoted = m.msg?.contextInfo?.quotedMessage;
        if (quoted) {
            m.quoted = {};
            m.quoted.message = quoted;
            m.quoted.type = getContentType(quoted);
            m.quoted.id = m.msg.contextInfo.stanzaId;
            m.quoted.sender = decodeJid(m.msg.contextInfo.participant);
            m.quoted.fromMe = m.quoted.sender === decodeJid(conn.user.id);
            m.quoted.text = quoted.conversation || quoted.extendedTextMessage?.text || quoted.imageMessage?.caption || '';
            
            if (m.quoted.sender.endsWith('@lid')) {
                m.quoted.senderLid = m.quoted.sender;
                m.quoted.sender = await convertLidToJid(conn, store, m.quoted.sender);
            }

            // Quoted media download helper
            m.quoted.download = async () => {
                const stream = await downloadContentFromMessage(m.quoted.message[m.quoted.type], m.quoted.type.replace('Message', ''));
                let buffer = Buffer.from([]);
                for await (const chunk of stream) {
                    buffer = Buffer.concat([buffer, chunk]);
                }
                return buffer;
            };
        }
    }

    // Direct reply helper function
    m.reply = async (text, options = {}) => {
        return conn.sendMessage(m.chat, { text, ...options }, { quoted: msg });
    };

    return m;
}

module.exports = {
    decodeJid,
    convertLidToJid,
    parseJid,
    serializeMessage
};
