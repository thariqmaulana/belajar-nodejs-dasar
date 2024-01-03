import net from "net";

// harus sama dengan di server;
const client = net.createConnection({
  port: 5500,
  host: "localhost"
 });

//  client ini juga bisa event emitter

// ketika menerima data
// returnnya buffer juga
client.addListener("data", (data) => {
  console.info(`Menerima data dari server: ${data.toString()}`);
})

// kita coba tiap 2 detik, client mengirim 
// hanya ini yang berupa pengiriman
// yang di atas itu ketika menerima data dari server. maksudnya ketika server menjawab balik
setInterval(() => {
  client.write("thariq\r\n");
} ,3000)