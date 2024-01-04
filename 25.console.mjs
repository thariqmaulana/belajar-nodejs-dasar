import { Console } from "console";
import fs from "fs";
// Membuat console sendiri

const logFile = fs.createWriteStream("application.log");

const log = new Console({
  // asalnya di console/terminal alias process.stdout / std.error
  // kita kirim ke sebuah stream, yaitu logfile yang sudah kita buat streamnya
  // kalau mau dikirim ke network server pun bisa, tinggal diatur stdnya
  stdout: logFile,
  stderr: logFile
})

log.info("Halo dari console buatan sendiri");
log.error("Terjadi Error");

const person = {
  firstName: "thariq",
  lastName: "maulana"
}

log.table(person);