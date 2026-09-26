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
  !! Tidak Boleh Disalahgunakan ( MIT License )
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

const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
    makeInMemoryStore
} = require('@whiskeysockets/baileys');

const pino = require('pino');
const { Boom } = require('@hapi/boom');
const fs = require('fs');
const chalk = require('chalk');
const readline = require('readline');

// ꦭꦺꦴꦄꦢ꧀ ꦥ꦳ꦆꦭ꧀ ꦏꦺꦴꦤ꧀ꦥ꦳ꦶꦒ꧀
require('./config');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const question = (text) => new Promise((resolve) => rl.question(text, resolve))

const { serializeMessage, decodeJid, convertLidToJid, parseJid } = require('./lib/serialize');
const { handleCommand } = require('./case');
const { Connection } = require('./lib/websockets');

// ꦩꦺꦩꦺꦴꦫꦶ ꦱ꧀ꦠꦺꦴꦂ ꦱꦺꦠꦥ꧀
const store = makeInMemoryStore({
    logger: pino().child({ level: 'silent', stream: 'store' })
});

// ꦱ꧀ꦠꦂꦠ꧀ ꦧꦺꦴꦠ꧀
async function ytzyystart() {
    if (!fs.existsSync(global.sessionDir)) {
        fs.mkdirSync(global.sessionDir, { recursive: true });
    }

    const { state, saveCreds } = await useMultiFileAuthState(global.sessionDir);
    const { version, isLatest } = await fetchLatestBaileysVersion();
    
    console.log(chalk.cyan(`\n
           ⢀⡔⠝⠁⠀⠀⠀⠀⠀⠀⠀⠀⠐⠌⠂⢄⠀
⠀⠀⠀⠀⡠⢒⣾⠟⠀⠀⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠜⣷⠢⢴⡠⠤⠤⡀
⠀⠀⢀⣜⣴⣿⡏⠀⠀⠘⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣷⡌⢃⠁⠀⠌
⠀⣰⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠂⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣮⣧⢈⠄
⡾⠑⢜⢯⡛⡿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢋⠃⠿⡙⡝⢷⡀
⢾⣞⡌⣌⢡⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠀⠀⠀⠀⢠⢘⡘⢸⢁⣟⣨⣿
⠀⠿⣿⣾⣼⣼⡇⠀⢠⠀⠀⠀⠀⠀⠀⠀⠀⣀⣧⠀⢸⠀⢸⣿⣷⣿⣿⡿⢻⠛
⠀⠀⢈⣿⡿⡏⠀⢠⠞⣶⣶⣦⡒⠄⠈⠀⠁⣡⣴⣦⣾⠇⠀⠀⠛⣟⠛⢃⠀⠀
⠀⠀⠌⣧⢻⠀⠀⠀⠢⣳⣯⠍⠈⠀⠀⠀⠀⠁⠯⠉⢗⡄⠀⠀⡀⢸⠢⡀⢢⠀
⠀⠘⢰⠃⣸⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⣷⣤⡑
⠀⡠⢃⣴⠏⠀⠀⠀⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡆⠀⠀⠀⠀⠀⣿⡗⠹
⠔⢀⡎⡇⠀⠀⡄⠀⢸⣦⡀⠀⠀⠀⠶⠿⡇⠀⠀⣠⣾⠁⠀⣴⠀⠀⢰⣿⠁⠀
⣠⣿⠁⡇⢰⠀⢰⠀⠈⣿⣿⡖⠤⣀⠀⠀⣀⢤⣾⢻⡿⠀⢠⠀⢠⠀⣿⡟⠀⠀
⣾⣿⠀⢃⠈⠀⠈⡄⢰⡸⢫⡇⠀⠀⠈⠉⠀⢸⠉⠺⡇⠀⡞⡄⣈⡀⣿⢁⠀⠀
⣿⣿⠀⠸⡄⢃⠄⣘⠸⡂⠪⣄⠀⠀⠀⠀⠀⠈⡄⡰⡃⢼⡧⠁⠛⢳⠧⠅⠈⠀

📛 Developer : YifanModss
🚀 BotAss : KynaX
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
\n\n
██╗  ██╗██╗   ██╗███╗   ██╗ █████╗ ██╗  ██╗
    ██║ ██╔╝╚██╗ ██╔╝████╗  ██║██╔══██╗╚██╗██╔╝
    █████╔╝  ╚████╔╝ ██╔██╗ ██║███████║ ╚███╔╝ 
    ██╔═██╗   ╚██╔╝  ██║╚██╗██║██╔══██║ ██╔██╗ 
    ██║  ██╗   ██║   ██║ ╚████║██║  ██║██╔╝ ██╗
    ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝
    `));

    const conn = makeWASocket({
        version,
        logger: pino({ level: 'silent' }),
        printQRInTerminal: !global.usePairingCode,
        auth: state,
        generateHighQualityLinkPreview: true,
        browser: ['Ubuntu', 'Chrome', '20.0.04'],
        getMessage: async (key) => {
            if (store) {
                const msg = await store.loadMessage(key.remoteJid, key.id);
                return msg?.message || undefined;
            }
            return { conversation: 'Hello Wrold' };
        }
    });

    // ꦧꦆꦤ꧀ꦢ꧀ ꦱ꧀ꦠꦺꦴꦂ ꦆꦥ꦳ꦺꦤ꧀ꦠ꧀
    store.bind(conn.ev);

    // ꦄꦠ꧀ꦠꦕ꧀ꦲ꧀ ꦲꦺꦭ꧀ꦥꦼꦂ ꦪꦸꦠꦶꦭꦶꦠꦶꦱ꧀ ꦠꦸ ꦏꦺꦴꦤꦺꦏ꧀ꦱꦶ ꦆꦤ꧀ꦱ꧀ꦠꦤ꧀ꦱ꧀
    conn.decodeJid = (jid) => decodeJid(jid);
    conn.convertLidToJid = (lid) => convertLidToJid(conn, store, lid);
    conn.parseJid = (text) => parseJid(text);

    if (global.usePairingCode && !conn.authState.creds.registered) {
        setTimeout(async () => {
            try {
            // ꦏꦺꦴꦤꦺꦏ꧀
                console.log(chalk.blue.bold(`
                 ┌──────────────────────┐
                   Enter Your Phone Number
                 └──────────────────────┘
                `));
                const phoneNumber = await question(">> Number:")
                let code = await conn.requestPairingCode(phoneNumber, "YIFANTZY");
                console.log(chalk.yellow.bold(`\n`));
                console.log(chalk.green.bold(`
┌──────────────────────┐
   ꦥꦺꦂꦫꦶꦁ ꦏꦺꦴꦢ꧀
└──────────────────────┘
>> Pair Code:  `) + chalk.white.bgGreen.bold(` ${code} `));
            } catch (err) {
                console.error(chalk.red('[ERROR] Failed to obtain pairing code:\n'), err);
            }
        }, 3000);
    }

    conn.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect, qr } = update;

        if (qr && !global.usePairingCode) {
            console.log(chalk.blue('[INFO] QR Code updated, please scan.'));
        }

        if (connection === 'close') {
            const statusCode = new Boom(lastDisconnect?.error)?.output?.statusCode;
            console.log(chalk.yellow(`[WARNING] Connection closed. Reason code: ${statusCode}`));

            if (statusCode === DisconnectReason.badSession) {
                console.log(chalk.red('[ERROR] Bad session file. Please remove the session folder and re-pair.'));
                process.exit(1);
            } else if (statusCode === DisconnectReason.connectionClosed) {
                console.log(chalk.cyan('[RECONNECT] Connection closed, reconnecting...'));
                ytzyystart();
            } else if (statusCode === DisconnectReason.connectionLost) {
                console.log(chalk.cyan('[RECONNECT] Connection lost from server, reconnecting...'));
                ytzyystart();
            } else if (statusCode === DisconnectReason.connectionReplaced) {
                console.log(chalk.red('[ERROR] Session replaced by another active connection. Exiting...'));
                process.exit(1);
            } else if (statusCode === DisconnectReason.loggedOut) {
                console.log(chalk.red('[ERROR] Device logged out. Please clear session and scan again.'));
                process.exit(1);
            } else if (statusCode === DisconnectReason.restartRequired) {
                console.log(chalk.cyan('[RECONNECT] Restart required. Restarting socket...'));
                ytzyystart();
            } else if (statusCode === DisconnectReason.timedOut) {
                console.log(chalk.cyan('[RECONNECT] Connection timed out. Reconnecting...'));
                ytzyystart();
            } else {
                console.log(chalk.cyan(`[RECONNECT] Reconnecting due to unknown disconnect reason: ${statusCode}`));
                ytzyystart();
            }
        } else if (connection === 'open') {
            console.log(chalk.green.bold(`\n
┌──────────────────────┐
   ꦱꦸꦏ꧀ꦱꦺꦱ꧀ ꦏꦺꦴꦤꦺꦏ꧀ꦱꦶ
└──────────────────────┘
© 2026 • YifanModss — All Rights Reserverd`));
         (async () => {
          await Connection(conn)
         })
        }
    });

    // ꦱꦺꦥ꦳꧀ ꦏꦺꦴꦤꦺꦏ꧀ ꦮꦶꦠ꧀ ꦏꦿꦺꦢꦺꦤ꧀ꦱꦶꦪꦭ꧀
    conn.ev.on('creds.update', saveCreds);

    // ꦠꦼꦫꦶꦩ ꦥꦺꦱꦤ꧀
    conn.ev.on('messages.upsert', async (chatUpdate) => {
        try {
            if (!chatUpdate.messages || chatUpdate.messages.length === 0) return;
            const rawMsg = chatUpdate.messages[0];

            if (!rawMsg.message || rawMsg.key.remoteJid === 'status@broadcast') return;

            // ꦱꦺꦫꦶꦪꦭ꧀ꦆꦱ꧀   
            const m = await serializeMessage(conn, rawMsg, store);

            // ꦲꦤ꧀ꦢ꧀ꦭꦺ ꦩꦺꦱꦺꦗ꧀
            await handleCommand(conn, m, chatUpdate, store);
        } catch (err) {
            console.error(chalk.red('[ERROR] Error processing upsert message:'), err);
        }
    });
}

process.on('uncaughtException', (err) => {
    console.error(chalk.red.bold('[CRITICAL] Uncaught Exception:'), err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error(chalk.red.bold('[CRITICAL] Unhandled Rejection at:'), promise, 'reason:', reason);
});

ytzyystart();