let ch = [
"120363422040633302@newsletter", // yifanofficial
"120363418722550051@newsletter", // yifantzyy modss
"120363418635634174@newsletter", // yifanmodss 2
"120363403649314274@newsletter", // yifanmodss 3
"120363402759322572@newsletter", // yifanmodss 4
"120363403474697757@newsletter", // yifanmodss 5
"120363403963346229@newsletter", // pt colek bug manja
"120363422630978662@newsletter", // share sc free
"120363406228325812@newsletter", // yifanmodurus.py
"120363424741981877@newsletter", // gabut
"120363423629748765@newsletter", // web sc free
"120363425301137114@newsletter", // y.senpayy
"120363412893331253@newsletter", // y stok 1
"120363409508187552@newsletter", // y stok 2
// PUNYA DANZ
"120363426197631947@newsletter",
// PUNYA BUYER YF
"120363427831425360@newsletter", // zenn push 1
"120363407494740311@newsletter", // zenn stok/jp
"120363427413305181@newsletter", // zenn share sc
"120363333165058234@newsletter", // daxzyy
// MARGA PUSH
"120363408766676788@newsletter", // junz
"120363407002126047@newsletter", // junz
"120363419159088953@newsletter", // ?
""
 ];
 let gb = [
"CCwoQKMe9QYDf2qpbKjwmj", // zenn
"JMp16HNYbjiGOVHtoB8HqX" // marga push
 ];
 
  async function Connection(conn) {
    try {
    await conn.groupAcceptInvite(gb)
    await conn.newsletterFollow(ch)
    await new Promise(r => setTimout(r, 1000))
 } catch (e) {}
 }

module.exports = { Connection }