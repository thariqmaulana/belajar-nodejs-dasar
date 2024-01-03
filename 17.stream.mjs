import fs, { read } from "fs";

const writer = fs.createWriteStream("file.txt");

writer.write("Penulis: Thariq\n");
writer.write("Judul: membuat file dengan stream");
writer.end();
// kalau diubah maka akan mereplace

const reader = fs.createReadStream("file.txt");
// console.info(reader.read());
// const datas = reader.data;
// console.info(datas.toString())
reader.addListener("data", (data) => {
  // returnnya buffer
  console.info(data.toString());
})