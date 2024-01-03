import net from "net";

// membuat server 
// client ini bisa manual mengambil datanya menggunakan stream atau
// bisa tambahkan eventlistener
// ini baru membuat server, belum menjalankan
const server = net.createServer((client) => {
  console.info("Client Connected");

  // trigger setiap menerima/ada data dari client
  // returnnya buffer
  client.addListener("data", (data) => {
    console.info(`Receive data from client: ${data.toString()}`);
    // membalas client
    // client ini bentuknya stream. readable dan writable
    // menulis/membalas ke client di bawah ini. lalu otomatis dikirim ke client
    client.write(`Data telah diterima. Halo ${data.toString()}\r\n`);
    // jangan lupa tambahkan \r\n
  })
})

// untuk menjalankan server, lakukan ini
server.listen(5500, "localhost");





