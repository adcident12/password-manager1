module.exports = {
  LINE_TOKEN:
    "E1Ef79uliVtvIIf3F6gnZ2fSX6yTSBDnNYQ7eUUQ4lYSC3o7TYSPO+RKaBNjLkhXZ6AmG7OIgFbwfgST93JQ9OKzu5/b2keE+eDr39P55QiCal25joQ7LuxJm1RSLGeMh2B4/+FT/q1PcXwpblR+WgdB04t89/1O/w1cDnyilFU=", // ใส่ Channel access token
  LINE_API: "https://api.line.me/v2/bot/message",
  FIREBASE: {
    PROJECT_ID: "password-manager-35d9a", // ใส่ projectId fore Firebase
    KEY_PATH: "./src/key.json" // ที่อยู่ของ key json ของ firebase ไฟล์
  },
  URL_COPY_PASSWORD: "https://example.com/api/v1/copy?text=", // แก้ไข url ที่ deploy เพื่อใช้งานจริงได้เลย
  URL_LOGO: "https://images2.imgbox.com/7e/0b/Cz8AV24h_o.png",
  BOT_MSG: {
    ACCOUNT: "กรุณาระบุชื่อ Account ที่ต้องการ",
    CONFIRM: "คุณยืนยันทำรายการหรือไม่",
    DELETE: "ลบ {name} เรียบร้อยแล้ว"
  }
};
