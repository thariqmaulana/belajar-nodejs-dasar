// import fs from "fs" ini yang callback atau sync
import fs from "fs/promises"

// returnnya kan promise jadi bisa seperti ini langsung, tanpa membuat func return promise
const buffer = await fs.readFile("7.file-system.mjs"); // digunakan untuk membaca file

console.info(typeof buffer); // object
console.info(buffer.toString());
console.info(buffer); // entah apa semacam angka. mungkin binary

// membuat file
// kalau dijalankan file ini maka dia akan membuat file di folder ini dengan
// parameter ke 1 nama file, parameter ke 2 isi file
// karena return promise bisa ditambah await juga
fs.writeFile("namaFile.html", "Isinya adalah Halo dari NodeJS, bisa dipakai buat update filenya juga");