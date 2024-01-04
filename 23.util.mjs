import { json } from "stream/consumers";
import util from "util";

const firstName = "thariq";
const lastName = "maulana"

// sekarang
console.info(`Halo ${firstName} ${lastName}`);
// dulu
// %s akan disubstitusi dengan parameter ke-2,3 ,... berurutan;
console.info(util.format("Halo %s %s", firstName, lastName));

const person = {
  firstName: "thariq",
  lastName: "maulana"
}

console.info(`Person: ${JSON.stringify(person)}`);
console.info(util.format("Person: %j", person));