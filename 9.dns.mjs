import dns from "dns/promises";

const address = await dns.lookup("https://thariqmaulana.github.io/NilaiAkhirUT/hitung-nilai.html");

console.info(address.address);
console.info(address.family);