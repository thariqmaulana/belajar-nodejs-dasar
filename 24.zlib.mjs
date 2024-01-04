import  zlib  from "zlib"; // kalau pake {} error
import fs from "fs"
// zlib digunakan untuk melakukan kompresi, bukan archive. bukan file lalu menjadi .zip file
// compress - decompress
// cocok digunakan kalau mau mengirim data. biar ukurannya kecil

// bisa digunakan untuk menyimpan data. dia kan membaca data
const source = fs.readFileSync("24.zlib.mjs");
console.info(source);//buffer
console.info(source.toString()); //file ini sendiri

// ada yang async kalau mau
// returnnya buffer lagi yang sudah dikompres. Kalau di tostringkan sudah sangat berbeda
const result = zlib.gzipSync(source); // harus buffer 

// kita coba simpan resultnya ke file. kalau mau di console saja tidak mengapa
fs.writeFileSync("compressed-zlib.txt", result);

// decompressing
const decompress = zlib.unzipSync(result);
console.info(decompress);// jadi buffer lagi
console.info(decompress.toString());
//selesai