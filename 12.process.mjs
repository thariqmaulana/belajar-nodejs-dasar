import process from "process";
// tidak perlu new Process(), karena sudah langsung object. Jadi tinggal pakai

// akan dipanggil ketika ctrl+c alias exit nodeJS
// exitCode itu bawaan, boleh diganti namanya
process.addListener("exit", (exitCode) => {
  console.info(`NodeJS exit with ${exitCode}. Kode berakhir`);
})
// tidak perlu ditulis triggernya, karena triggernya adalah ketika kita exit, beda dengan
// event yang harus ditulis

console.info(process.version);
console.table(process.argv);
console.table(process.report);
console.table(process.env);

process.exit(100); // ketika membaca ini maka nodeJs akan exit dan kode berhenti
// 100 akan dikirim ke parameter di atas
// kalau tidak menulis seperti ini ya exit codenya otomatis

console.info("tidak akan dijalankan karena program sudah exit");
