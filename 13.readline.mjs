import process from "process";
import  readline  from "readline/promises";
// readline digunakan untuk interaksi
// karena interaksi maka perlu input output. disini kita gunakan std(terminal)

const input = readline.createInterface({
  // inputnya mau dari mana? kita minta dari standardnya, yaitu terminal
  input: process.stdin,
  output: process.stdout
  // kalau output ini dihilangkan, maka tulisan siapa nama anda hilang. tapi tetap bisa input data
  // karena ada stdin
})

// input.question("Siapa Nama Anda?", (name) => {
//   console.info(`Halo ${name}`);
//   input.close();// untuk menutup sesi. jadi langsung auto close setelah ini
// })

const name = await input.question("Siapa nama anda?");
console.info(`Halo ${name}`)
input.close();
process.stdout.write("tes123")
