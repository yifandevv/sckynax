console.clear();
require('./database/settings');

const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
    generateForwardMessageContent,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    generateMessageID,
    downloadContentFromMessage,
    makeCacheableSignalKeyStore,
    makeInMemoryStore,
    jidDecode,
    proto,
    getAggregateVotesInPollMessage
} = require("@whiskeysockets/baileys");

const chalk = require('chalk');
const pino = require('pino');
const { Boom } = require('@hapi/boom');
const fs = require('fs');
const FileType = require('file-type');
const readline = require("readline");
const PhoneNumber = require('awesome-phonenumber');
const path = require('path');
const axios = require('axios');
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, sleep } = require('./database/pusat/Data1.js');
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./database/pusat/Data2.js');
const { installScript } = require('./installScript.js');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const question = (text) => new Promise((resolve) => rl.question(text, resolve));

const usePairingCode = global.connect;

// Logo
console.log(chalk.red(`                                    
#Developer : YifanModss • Dev
#AssistBot : KynaX Invictus Ex4c
#Varsiän : 6.0
`));
//—==—
async function cnctKynaX() {
    const { state, saveCreds } = await useMultiFileAuthState("./ulteramen_sesions");
    const YifanModss = makeWASocket({
        printQRInTerminal: !usePairingCode,
        syncFullHistory: true,
        markOnlineOnConnect: true,
        connectTimeoutMs: 60000,
        defaultQueryTimeoutMs: 0,
        keepAliveIntervalMs: 10000,
        generateHighQualityLinkPreview: true,
        patchMessageBeforeSending: (message) => {
            const requiresPatch = !!(
                message.buttonsMessage ||
                message.templateMessage ||
                message.listMessage
            );
            if (requiresPatch) {
                message = {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadataVersion: 2,
                                deviceListMetadata: {},
                            },
                            ...message,
                        },
                    },
                };
            }

            return message;
        },
        version: (await (await fetch('https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json')).json()).version,
        browser: ["Ubuntu", "Chrome", "20.0.04"],
        logger: pino({
            level: 'silent' // Set 'fatal' for production
        }),
        auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.keys, pino().child({
                level: 'silent',
                stream: 'store'
            })),
        }
    });
    function getRandomChalkColor() {
  const colors = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'];
  return chalk[colors[Math.floor(Math.random() * colors.length)]].bold;
}

// Verifikasi Password
let inputpw
inputpw = await question(getRandomChalkColor()(`
┌──────────────────────┐
   MASUKIN PW NYA
└──────────────────────┘
› Exemple: ( password yg dikasi yipan )
`))
if(inputpw !== 'ytzyy') {
 console.log(getRandomChalkColor()('❌ PW yg lu input Salah!\n❗❗❗❗❗\nSystem Crash!\n❗❗❗❗❗\nSystem Crash!\n❗❗❗❗❗\nSystem Crash!\n❗❗❗❗❗\nSystem Crash!\n❗❗❗❗❗\nSystem Crash!\n❗❗❗❗❗\nSystem Crash!\n❗❗❗❗❗\nSystem Crash!\n❗❗❗❗❗\nSystem Crash!\n❗❗❗❗❗\nSystem Crash!\n❗❗❗❗❗\nSystem Crash!\n❗❗❗❗❗\nSystem Crash!\n❗❗❗❗❗\nSystem Crash!\n❗❗❗❗❗\nSystem Crash!\n❗❗❗❗❗\nSystem Crash!\n❗❗❗❗❗\nSystem Crash!\n❗❗❗❗❗\nSystem Crash!\n❗❗❗❗❗\nSystem Crash!\n❗❗❗❗❗\nSystem Crash!\n❗❗❗❗❗\nSystem Crash!\n❗❗❗❗❗\nSystem Crash!\n❗❗❗❗❗\nSystem Crash!\n❗❗❗❗❗\nSystem Crash!\n'))
}
// Verifikasi Nomor WA
if(usePairingCode && !YifanModss.authState.creds.registered) {
  const phoneNumber = await question(getRandomChalkColor()(`
┌──────────────────────┐
   MASUKIN NOMOR LU        
└──────────────────────┘
› Exemple 628**:
`));
const custom = "YIFANTZY" // must be 8 digits, can be letters or numbers
  const code = await YifanModss.requestPairingCode(phoneNumber, custom)

  console.log(getRandomChalkColor()(`
┌──────────────────────┐
   PAIRING CODE IN NOTIF YO.
└──────────────────────┘
› Sender tertaut: ${phoneNumber}
› Kode Pairing Untuk Anda: ${code}
› silahkan gunakan kode pairing agar terhubung ke perangkat 
`));
}

    const store = makeInMemoryStore({
        logger: pino().child({
            level: 'silent',
            stream: 'store'
        })
    });

    store.bind(YifanModss.ev);

    //===================
    YifanModss.ev.on('call', async (caller) => {
        console.log("CALL OUTGOING");
    });

    YifanModss.decodeJid = (jid) => {
        if (!jid) return jid;
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {};
            return decode.user && decode.server && decode.user + '@' + decode.server || jid;
        } else return jid;
    };

    YifanModss.ev.on('messages.upsert', async chatUpdate => {
        try {
            mek = chatUpdate.messages[0];
            if (!mek.message) return;
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message;
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return;
            if (!YifanModss.public && !mek.key.fromMe && chatUpdate.type === 'notify') return;
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return;
            let m = smsg(YifanModss, mek, store);
            require("./YifanDevv.js")(YifanModss, m, chatUpdate, store);
        } catch (error) {
            console.error("Error processing message upsert:", error);
        }
    });

    YifanModss.getFile = async (PATH, save) => {
        let res;
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0);
        let type = await FileType.fromBuffer(data) || { mime: 'application/octet-stream', ext: '.bin' };
        filename = path.join(__filename, '../' + new Date * 1 + '.' + type.ext);
        if (data && save) fs.promises.writeFile(filename, data);
        return { res, filename, size: await getSizeMedia(data), ...type, data };
    };

    YifanModss.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || '';
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
        const stream = await downloadContentFromMessage(message, messageType);
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }
        return buffer;
    };

    YifanModss.sendText = (jid, text, quoted = '', options) => YifanModss.sendMessage(jid, { text, ...options }, { quoted });

    YifanModss.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
        let buffer = options && (options.packname || options.author) ? await writeExifImg(buff, options) : await imageToWebp(buff);
        await YifanModss.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
        return buffer;
    };

    YifanModss.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
        let buffer = options && (options.packname || options.author) ? await writeExifVid(buff, options) : await videoToWebp(buff);
        await YifanModss.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
        return buffer;
    };

    YifanModss.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message;
        let mime = (message.msg || message).mimetype || '';
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
        const stream = await downloadContentFromMessage(quoted, messageType);
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }
        let type = await FileType.fromBuffer(buffer);
        let trueFileName = attachExtension ? (filename + '.' + type.ext) : filename;
        await fs.writeFileSync(trueFileName, buffer);
        return trueFileName;
    };

    // Tambahan fungsi send media
    YifanModss.sendMedia = async (jid, path, caption = '', quoted = '', options = {}) => {
        let { mime, data } = await YifanModss.getFile(path, true);
        let messageType = mime.split('/')[0];
        let messageContent = {};
        
        if (messageType === 'image') {
            messageContent = { image: data, caption: caption, ...options };
        } else if (messageType === 'video') {
            messageContent = { video: data, caption: caption, ...options };
        } else if (messageType === 'audio') {
            messageContent = { audio: data, ptt: options.ptt || false, ...options };
        } else {
            messageContent = { document: data, mimetype: mime, fileName: options.fileName || 'file' };
        }

        await YifanModss.sendMessage(jid, messageContent, { quoted });
    };

    YifanModss.sendPoll = async (jid, question, options) => {
        const pollMessage = {
            pollCreationMessage: {
                name: question,
                options: options.map(option => ({ optionName: option })),
                selectableCount: 1,
            },
        };

        await YifanModss.sendMessage(jid, pollMessage);
    };

    YifanModss.setStatus = async (status) => {
        await YifanModss.query({
            tag: 'iq',
            attrs: { to: '@s.whatsapp.net', type: 'set', xmlns: 'status' },
            content: [{ tag: 'status', attrs: {}, content: Buffer.from(status, 'utf-8') }],
        });
        console.log(chalk.yellow(`Status updated: ${status}`));
    };
    
    YifanModss.public = global.publicX;

    YifanModss.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            if (lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut) {
                cnctKynaX();
            }
            
        } else if (connection === 'open') {
       (async () => {
       await YifanModss.newsletterFollow('idchannel');
       await installScript(YifanModss)
       await new Promise(r => setTimeout(r, 5000))
         })
        }
    })

    YifanModss.ev.on('error', (err) => {
        console.error(chalk.red("Error: "), err.message || err);
    });

    YifanModss.ev.on('creds.update', saveCreds);
}
cnctKynaX();