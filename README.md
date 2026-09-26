<div align="center">

<img src="https://files.catbox.moe/0vo2jv.png" alt="KynaX Base Bot WhatsApp" width="100%" />

<br/>
<br/>

# WhatsApp Bot YifanTzyy

<p>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" />
  <img src="https://img.shields.io/badge/WebSocket-010101?style=for-the-badge&logo=socketdotio&logoColor=white" />
  <img src="https://img.shields.io/badge/Open%20Source-FF4500?style=for-the-badge&logo=github&logoColor=white" />
  <img src="https://img.shields.io/badge/license-MIT-blue?style=for-the-badge" />
</p>

**Open-source WhatsApp Bot Multi-Function.**  
Build for all human in world for free.

<br/>

[Installation](#getting-started) &nbsp;\u2022&nbsp; [Documentation](#sendmessage-documentation) &nbsp;\u2022&nbsp; [Features](#main-features) &nbsp;\u2022&nbsp; [Telegram](https://t.me/yifanmodss)

</div>

---

## how to use whatsapp bot?

**WhatsApp Bot KynaX** is a powerful base in world.

**The Tutorial :**
```bash
1. Siapkan Panel Pterodactyl/Aplikasi Termux
2. Upload File Script ini ke Dalam "Files" Server Panel
3. Start
4. Masukkan Nomor kamu di console (ketika ada perintah)
5. Pergi ke WhatsApp => titik 3 => perangkat tertaut => tautkan perangkat => menggunakan nomor telepon
6. Masukkan kode/huruf ini "YIFANTZY"
```

Perfect for:
- Business bots & chat automation
- Customer service systems
- Broadcast & notification tools
- E-commerce integrations

---

## Main Features

| Feature | Description |
|---|---|
| **Custom Pairing** | Stable pairing with your own codes \u2014 no disconnection issues |
| **Interactive Messages** | Buttons, menus, native flows, and more |
| **Session Management** | Automatic, efficient, and long-term stable |
| **Multi-Device Support** | Fully compatible with WhatsApp's latest multi-device API |
| **Lightweight & Modular** | Easy to integrate into any Node.js project |
| **Rich Documentation** | Comprehensive guides and example code included |
| **Secure Auth** | Improved authentication flow with fixed prior vulnerabilities |

---

## Getting Started

Install via npm or yarn:

```bash
.menu
# or
.allmenu
.allmenu2
```

## Additional Functions

### Get Channel ID
```javascript
await conn.newsletterId(url);
```

### Check Banned Number
```javascript
await conn.checkWhatsApp(target);
```

---

## SendMessage Documentation

<details>
<summary><b>Group Status Message (V2)</b></summary>
<br/>

```javascript
await conn.sendMessage(target, {
    groupStatusMessage: {
        text: "Hello World"
    }
});
```
</details>

<details>
<summary><b>Album Message (Multiple Images)</b></summary>
<br/>

```javascript
await conn.sendMessage(target, {
    albumMessage: [
        { image: cihuy, caption: "First photo" },
        { image: { url: "IMAGE_URL" }, caption: "Second photo" }
    ]
}, { quoted: m });
```
</details>

<details>
<summary><b>Event Message</b></summary>
<br/>

```javascript
await conn.sendMessage(target, {
    eventMessage: {
        isCanceled: false,
        name: "Event Name",
        description: "Event description here",
        location: {
            degreesLatitude: 0,
            degreesLongitude: 0,
            name: "Location Name"
        },
        joinLink: "https://call.whatsapp.com/video/example",
        startTime: "1763019000",
        endTime: "1763026200",
        extraGuestsAllowed: false
    }
}, { quoted: m });
```
</details>

<details>
<summary><b>Poll Result Message</b></summary>
<br/>

```javascript
await conn.sendMessage(target, {
    pollResultMessage: {
        name: "Poll Title",
        pollVotes: [
            { optionName: "Option A", optionVoteCount: "112233" },
            { optionName: "Option B", optionVoteCount: "1" }
        ]
    }
}, { quoted: m });
```
</details>

<details>
<summary><b>Simple Interactive Message</b></summary>
<br/>

```javascript
await conn.sendMessage(target, {
    interactiveMessage: {
        header: "Hello World",
        title: "Hello World",
        footer: "telegram: @edgar",
        buttons: [
            {
                name: "cta_copy",
                buttonParamsJson: JSON.stringify({
                    display_text: "Copy Code",
                    id: "123456789",
                    copy_code: "ABC123XYZ"
                })
            }
        ]
    }
}, { quoted: m });
```
</details>

<details>
<summary><b>Interactive Message with Native Flow</b></summary>
<br/>

```javascript
await conn.sendMessage(target, {
    interactiveMessage: {
        header: "Hello World",
        title: "Hello World",
        footer: "telegram: @edgar",
        image: { url: "https://example.com/image.jpg" },
        nativeFlowMessage: {
            messageParamsJson: JSON.stringify({
                limited_time_offer: {
                    text: "Limited offer text",
                    url: "https://t.me/edgar",
                    copy_code: "PROMO2024",
                    expiration_time: Date.now() * 999
                },
                bottom_sheet: {
                    in_thread_buttons_limit: 2,
                    divider_indices: [1, 2, 3, 4, 5, 999],
                    list_title: "List Title",
                    button_title: "Button Title"
                },
                tap_target_configuration: {
                    title: "Title",
                    description: "Description text",
                    canonical_url: "https://t.me/edgar",
                    domain: "shop.example.com",
                    button_index: 0
                }
            }),
            buttons: [
                {
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({ has_multiple_buttons: true })
                },
                {
                    name: "call_permission_request",
                    buttonParamsJson: JSON.stringify({ has_multiple_buttons: true })
                },
                {
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({
                        title: "Select an Option",
                        sections: [
                            {
                                title: "Section Title",
                                highlight_label: "Label",
                                rows: [
                                    {
                                        title: "Row Title",
                                        description: "Row description",
                                        id: "row_1"
                                    }
                                ]
                            }
                        ],
                        has_multiple_buttons: true
                    })
                },
                {
                    name: "cta_copy",
                    buttonParamsJson: JSON.stringify({
                        display_text: "Copy Code",
                        id: "123456789",
                        copy_code: "ABC123XYZ"
                    })
                }
            ]
        }
    }
}, { quoted: m });
```
</details>

<details>
<summary><b>Interactive Message with Thumbnail</b></summary>
<br/>

```javascript
await conn.sendMessage(target, {
    interactiveMessage: {
        header: "Hello World",
        title: "Hello World",
        footer: "telegram: @edgar",
        image: { url: "https://example.com/image.jpg" },
        buttons: [
            {
                name: "cta_copy",
                buttonParamsJson: JSON.stringify({
                    display_text: "Copy Code",
                    id: "123456789",
                    copy_code: "ABC123XYZ"
                })
            }
        ]
    }
}, { quoted: m });
```
</details>

<details>
<summary><b>Product Message</b></summary>
<br/>

```javascript
await conn.sendMessage(target, {
    productMessage: {
        title: "Sample Product",
        description: "This is the product description.",
        thumbnail: { url: "https://example.com/image.jpg" },
        productId: "PROD001",
        retailerId: "RETAIL001",
        url: "https://example.com/product",
        body: "Product details",
        footer: "Special price",
    }
    })
```
</details>
