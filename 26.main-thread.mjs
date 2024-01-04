import { Worker, threadId } from "worker_threads";

const worker1 = new Worker("./27.worker.mjs");
const worker2 = new Worker("./27.worker.mjs");
// jadi 1 file ini akan dikerjakan oleh 2 worker/thread;

// mirip web worker caranya

worker1.postMessage(10);
worker2.postMessage(10);

worker1.addListener("message", (message) => {
  console.info(`Thread-${threadId} receive from worker 1: ${message}`);
})
worker2.addListener("message", (message) => {
  console.info(`Thread-${threadId} receive from worker 1: ${message}`);
})
// kenapa hasilnya thread-0? karena ini main thread
