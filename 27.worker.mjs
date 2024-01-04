import { parentPort, threadId } from "worker_threads";
// parentPort adalah representasi dari koneksi antara worker dan main
// parentPort anggap saja parent/main

// anggap saja addlistener ketika parentPort mengirim pesan
parentPort.addListener("message", (message) => {
  for (let i = 0; i <= message; i++) {
    // console ini muncul di main file bukan disini, walau tidak ada postMessage
    // keluarannya dihimpun di main file
    console.info(`Thread-${threadId} send message ${i}`);
    parentPort.postMessage(i);
  }
  // kita close workernya
  parentPort.close();
})