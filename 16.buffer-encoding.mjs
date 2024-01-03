
const buffer = Buffer.from("thariq", "utf8")

console.info(buffer);
console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase641 = Buffer.from("dGhhcmlx", "base64");// ngambil dari base 64
const bufferBase642 = Buffer.from("dGhhcmlx", "hex");//jadi kebalik kalau salah, utf 8 juga sudah dicoba
console.info(bufferBase641.toString());
console.info(bufferBase642.toString());