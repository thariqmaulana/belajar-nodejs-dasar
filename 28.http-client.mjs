import https from "https";

const endpoint = "https://eoxq8a6npm5qqug.m.pipedream.net";
const request = https.request(endpoint, {
  method: "POST",
  headers: {
    "Content-Type" : "application/json",
    "Accept" : "application/json"
  }
}, (response) => {
  // bisa lihat detail apa saja isi response
  response.addListener("data", (data) => {
    console.info(data);//buffer
    console.info(typeof data);//object
    console.info(data.toString());
    console.info(JSON.parse(data));
    console.info(JSON.parse(data).success);//true
  })
})

const body = JSON.stringify({
  firstName: "thariq",
  lastName: "maulana"
})

request.write(body);// string / buffer 
request.end(); //ini ajax.send() nya