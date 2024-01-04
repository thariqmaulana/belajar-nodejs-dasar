import http from "http";

// membuat server
// di dalam callback nya ada 2 parameter
// 1. request yang masuk (http request client). bisa kita lihat bodynya misalnya
// 2. response: respon kita
// responsenya bentuknya stream jadi bisa write
// jangan lupa .end()untuk menghentikan atau mengirim balik ke client
const server = http.createServer((request, response) => {

  console.info(request.method);
  console.info(request.url);

  // response.write("Halo dari server");//bisa buffer / string

  if (request.url === "/thariq") {
    response.write("Halo Thariq");
  } else {
    response.write("Halo dari server");
  }
  response.end();
});

// jalankan servernya di port berapa
server.listen(1234);