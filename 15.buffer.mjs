
const buffer = Buffer.from("thariq");
console.info(buffer);

const change = buffer.toString();
console.info(change);

// wow nilai buffernya berubah padahal tidak disimpan
buffer.reverse();
console.info(buffer.toString());