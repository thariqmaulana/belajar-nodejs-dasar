import cluster from "cluster";
import os from "os";
import process from "process";
import http from "http";

// if (cluster.isPrimary) {
//   console.info(`Primary : ${process.pid}`)//process id sepertinya;
//   cluster.fork()//menjalankan / membuat worker. seperti new Worker
//   cluster.fork()
//   console.info("tes"); // muncul
// }


if (cluster.isPrimary) {
  console.info(`Primary : ${process.pid}`);
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }
  cluster.addListener("exit", (worker) => {
    console.info(`Worker ${worker.id} is exit`); // tidak dari 0, tapi 1. 0 nya primary mungkin
    cluster.fork();
  })
}

if (cluster.isWorker) {
  // sebanyak thread
  // menjalankan file ini juga si worker
  // ini akan dijalankan sebanyak berapa kali karena ada beberapa worker yang berbeda
  console.info(`Worker : ${process.pid}`);

  const server = http.createServer((request, response) => {
    response.write(`Response from process ${process.pid}`);
    response.end();
    process.exit();// kalau tidak exit maka akan dijalankan worker yang sama terus.
  })

  server.listen(4000);
}


