import http from "http";

const server = http.createServer((request, response) => {

  if (request.method === "POST") {
    request.addListener("data", (data) => {
      response.setHeader("Content-Type", "application/json");
      const json = JSON.parse(data)
      response.write(`Halo ${json.firstName} ${json.lastName} Dari server`);
      
    })
  } else {
    response.write("Hallo");
    
  }
  response.end();
});

server.listen(3300);