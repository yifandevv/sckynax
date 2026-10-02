const crypto = require("crypto")
const { proto } = require("@whiskeysockets/baileys")

module.exports = async (conn, m) => {
const IM = proto.Message.InteractiveMessage

// ───── check ─────

if (!IM?.BloksWidget) {
  throw new Error("BloksWidget belum tersedia di WAProto")
}

const uuid = crypto.randomUUID()
const jid = m.chat

// ───── widget data ─────

const widgetData = {
  version: "v0.9",

  createSurface: {
    surfaceId: `kynax-dashboard=${uuid}`,

    catalogId:
      "https://a2ui.org/specification/v0_9/catalogs/basic/catalog.json",

    components: [

      // ───── root ─────

      {
        id: "root",
        component: "Column",
        children: [
          "hero",
          "system",
          "quick",
          "allmenu",
          "developer",
          "quote"
        ]
      },

      // ───── hero ─────

      {
        id: "hero",
        component: "Card",
        child: "hero_content"
      },

      {
        id: "hero_content",
        component: "Column",
        children: [
          "profile",
          "title",
          "dev",
          "status"
        ],
        align: "center"
      },

      {
        id: "profile",
        component: "Image",
        url: "https://raw.githubusercontent.com/yifandevv/img/refs/heads/main/ytzyy.jpg",
        variant: "avatar",
        fit: "cover"
      },

      {
        id: "title",
        component: "Text",
        text: "KynaX Modzz",
        variant: "h1"
      },

      {
        id: "dev",
        component: "Text",
        text: "YifanModss / CoderXs.dev",
        variant: "body"
      },

      {
        id: "status",
        component: "Text",
        text: "• ONLINE / READY",
        variant: "body"
      },

      // ───── system ─────

      {
        id: "system",
        component: "Card",
        child: "system_content"
      },

      {
        id: "system_content",
        component: "Column",
        children: [
          "system_title",
          "system_divider",
          "system_info"
        ]
      },

      {
        id: "system_title",
        component: "Text",
        text: "SYSTEM",
        variant: "h3"
      },

      {
        id: "system_divider",
        component: "Divider"
      },

      {
        id: "system_info",
        component: "Text",
        text:
          "├─ BotName    : KynaX\n" +
          "├─ Status     : ONLINE\n" +
          "├─ Version    : 5.1.0\n" +
          "├─ Interface  : A2UI v0.9\n" +
          "├─Platform   : WhatsApp\n" +
          "└─ Prefix   : . (DOT)"
      },

      // ───── quick access ─────

      {
        id: "quick",
        component: "Card",
        child: "quick_content"
      },

      {
        id: "quick_content",
        component: "Column",
        children: [
          "quick_title",
          "quick_divider",
          "quick_buttons"
        ]
      },

      {
        id: "quick_title",
        component: "Text",
        text: "QUICK ACCESS",
        variant: "h3"
      },

      {
        id: "quick_divider",
        component: "Divider"
      },

      {
        id: "quick_buttons",
        component: "Column",
        children: [
          "menu_button",
          "command_button",
          "developer_button",
          "channel_button"
        ]
      },

      {
        id: "menu_button",
        component: "Button",
        child: "menu_text",
        variant: "primary",
        action: {
          call: "openUrl",
          args: {
            url: "https://yifancode.netlify.app"
          }
        }
      },

      {
        id: "menu_text",
        component: "Text",
        text: "→ Main Menu"
      },

      {
        id: "command_button",
        component: "Button",
        child: "command_text",
        variant: "borderless",
        action: {
          call: "openUrl",
          args: {
            url: "https://commands.com"
          }
        }
      },

      {
        id: "command_text",
        component: "Text",
        text: "→ Commands"
      },

      {
        id: "developer_button",
        component: "Button",
        child: "developer_text",
        variant: "borderless",
        action: {
          call: "openUrl",
          args: {
            url: "https://wa.me/yifantzy"
          }
        }
      },

      {
        id: "developer_text",
        component: "Text",
        text: "→ Developer"
      },

      {
        id: "channel_button",
        component: "Button",
        child: "channel_text",
        variant: "borderless",
        action: {
          call: "openUrl",
          args: {
            url: "https://whatsapp.com/channel/0029Vb5renwC6ZvgQua7Cp3G"
          }
        }
      },

      {
        id: "channel_text",
        component: "Text",
        text: "→ Official Channel"
      },

      // ───── all menu ─────

      {
        id: "allmenu",
        component: "Card",
        child: "allmenu_content"
      },

      {
        id: "allmenu_content",
        component: "Column",
        children: [
          "allmenu_title",
          "allmenu_divider",
          "allmenu_text"
        ]
      },

      {
        id: "allmenu_title",
        component: "Text",
        text: "── ALL MENU ──",
        variant: "h3"
      },

      {
        id: "allmenu_divider",
        component: "Divider"
      },

      {
        id: "allmenu_text",
        component: "Text",
        text: `
        🥳 Welcome in The Bot KynaX!
         
        ─────× All Menu ×─────
        .menu
        .allmenu
        .ytplay
        .ping
        .jid
        .convertlid
        .runtime
        .group
        .bugs
        .eval
        .$
        
        [ALL] PREFIX IS (.) DOT
        `
      },

      // ───── developer ─────

      {
        id: "developer",
        component: "Card",
        child: "developer_content"
      },

      {
        id: "developer_content",
        component: "Column",
        children: [
          "developer_header",
          "developer_divider",
          "developer_info"
        ]
      },

      {
        id: "developer_header",
        component: "Row",
        children: [
          "developer_icon",
          "developer_title"
        ]
      },

      {
        id: "developer_icon",
        component: "Icon",
        name: "person"
      },

      {
        id: "developer_title",
        component: "Text",
        text: "DEVELOPER",
        variant: "h3"
      },

      {
        id: "developer_divider",
        component: "Divider"
      },

      {
        id: "developer_info",
        component: "Column",
        children: [
          "developer_name",
          "developer_role",
          "developer_project",
          "developer_contact"
        ]
      },

      {
        id: "developer_name",
        component: "Text",
        text: "YifanModss",
        variant: "h3"
      },

      {
        id: "developer_role",
        component: "Text",
        text: "├─ Role     : Developer"
      },

      {
        id: "developer_project",
        component: "Text",
        text: "├─ Project  : KynaX"
      },

      {
        id: "developer_contact",
        component: "Button",
        child: "contact_text",
        variant: "borderless",
        action: {
          call: "openUrl",
          args: {
            url: "https://wa.me/yifantzy"
          }
        }
      },

      {
        id: "contact_text",
        component: "Text",
        text: "└─ Contact YifanModss"
      },

      // ───── quote ─────

      {
        id: "quote",
        component: "Card",
        child: "quote_content"
      },

      {
        id: "quote_content",
        component: "Column",
        children: [
          "quote_text"
        ],
        align: "center"
      },

      {
        id: "quote_text",
        component: "Text",
        text: "\"GILAK LU.\"",
        variant: "body"
      }
    ]
  }
}

// ───── bloks widget ─────

const widget = IM.BloksWidget.create({
  uuid,
  type: "im_a2ui",
  data: JSON.stringify(widgetData)
})

// ───── whatsapp message ─────

const msg = proto.Message.create({
  interactiveMessage: IM.create({

    header: {
      hasMediaAttachment: false
    },

    body: {
      text: "\u200b"
    },

    footer: {
      text: "─────×_×─────"
    },

    nativeFlowMessage: {
      buttons: [],
      messageParamsJson: "{}",
      messageVersion: 1
    },

    bloksWidget: widget
  })
})

// ───── proto validation ─────

const encoded = proto.Message.encode(msg).finish()
const decoded = proto.Message.decode(encoded)

if (!decoded.interactiveMessage?.bloksWidget) {
  throw new Error("bloksWidget hilang setelah encode/decode")
}

// ───── send ─────

const messageId = crypto
  .randomBytes(16)
  .toString("hex")

await conn.relayMessage(
  jid,
  msg,
  {
    messageId
  }
)
};