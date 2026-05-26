// modul ef es
const fs = require('fs')

// bot ceting
global.connect = true //false qr
global.publicX = true //false self ( bot restart/start )
global.owner = ['6282118412445'] //ytzyy numb
global.developer = "YifanModss" //ytzyy name
global.botname = "KynX Ex4c" //ytzyy scname
global.version = "6.0" //ytzyy scvers

// cetiker
global.packname = "makloe"//popok
global.author = "ytzyy"//popok

// cocial amak ang
global.ytube = "https://youtube.com/@yifanoffc"
global.ttok = ""
global.igram = ""
global.chtele = "t.me/aboutyifantzyy"
global.tgram = "https://t.me/yifanmodss"
global.limitCount = 1

// payment
global.dana = '08'
global.gopay = '08'
global.ovo = '08'
global.qr = fs.readFileSync('./database/image/qr.jpg')

global.mess = {
 owner: '*❌ Khusus YifanModss, Tuan. Anda tidak Bisa Menggunkan Fitur ini Karena Khusus YifanModss dan Owner*',
 premium: '*❌ Khusus YifanModss, Tuan. Anda tidak Bisa Menggunkan Fitur ini Karena Khusus YifanModss dan Premium User*'
}

//System Bot Settings
global.prefa = ['','!','.',',','🐤','🗿'] // change? err lh nyo apak ang

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})