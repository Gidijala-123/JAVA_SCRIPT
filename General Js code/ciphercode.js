const crypto = require("crypto");
const message = "Hello Bhargava";
let secretKey = "abc@123"; // Your initial key

// Ensure the secretKey is exactly 32 bytes long
secretKey =
  secretKey.length < 32 ? secretKey.padEnd(32, "\0") : secretKey.slice(0, 32);
console.log(secretKey);

const iv = crypto.randomBytes(16);
const cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(secretKey), iv);
let encryptedMessage =
  cipher.update(message, "utf8", "hex") + cipher.final("hex");
console.log("Encrypted Message:", encryptedMessage);

const decipher = crypto.createDecipheriv(
  "aes-256-cbc",
  Buffer.from(secretKey),
  iv
);
let decryptedMessage =
  decipher.update(encryptedMessage, "hex", "utf8") + decipher.final("utf8");
console.log("Decrypted Message:", decryptedMessage);

const hash = crypto.createHash("sha256").update(message).digest("hex");
console.log("Hashed Message:", hash);
