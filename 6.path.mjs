import path from "path";

const file = "/Users/thariq/contohsaja.html";

console.info(path.dirname(file));//check directorynya. nama file tidak termasuk karena bukan directory
console.info(path.basename(file));//check nama file
console.info(path.extname(file)); //check extension

// path digunakan untuk mengekstrak informasi dari sebuah lokasi file
//  bukan untuk membuat file atau memanipulasi. Bukan menggunakan module path
// tapi menggunakan file-system