import { EventEmitter } from "events";
// membuat event emitter manual
const emitter = new EventEmitter();

// seperti membuat event sendiri
// membuat event hello
// parameter kedua adalah apa yang akan dijalankan ketika mentrigger event hello
emitter.addListener("hello", (name) => {
  console.info(`hello ${name}`);
})
// bisa menambahkan lebih dari 1 event, walaupun callbacknya beda
emitter.addListener("hello", (name) => {
  console.info(`halo ${name}`);
})
emitter.addListener("hi", (name) => {
  console.info(`hi ${name}`);
})

// mentrigger event
emitter.emit("hello", "Thariq");
emitter.emit("hi", "Thariq");
emitter.emit("salah", "Thariq"); //tidak muncul