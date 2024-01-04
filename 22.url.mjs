import { URL } from "url";

const url = new URL("https://thariqmaulana.github.io/NilaiAkhirUT/hitung-nilai.html");

console.info(url.toString());//sama saja dengan .href
console.info(url.href);
console.info(url.protocol);
console.info(url.host);
console.info(url.pathname);

console.info(url.searchParams);// tidak adaa punyaku. setelah ? returnnya object urlsearchparam
// objectnya bisa dimanipulasi

url.host = "www.thariq.com";
url.searchParams.append("status", "single");

// seperti biasa tidak mengubah nilai asli
console.info(url.href); 
// https://thariqmaulana.github.io/NilaiAkhirUT/hitung-nilai.html
// https://www.thariq.com/NilaiAkhirUT/hitung-nilai.html?status=single
console.info(url.searchParams);