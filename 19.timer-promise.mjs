import timers from "timers/promises";

console.info(1);
// const time = await timers.setInterval(1000, new Date());
// bukan seperti ini

// for await (const startTime1 of timers.setInterval(1000, new Date())){
//   console.info(startTime1);
// }
for await (const startTime of timers.setInterval(1000, "hiraukan")){
  console.info(new Date());
}