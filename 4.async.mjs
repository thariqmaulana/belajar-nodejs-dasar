function samplePromise() {
  return Promise.resolve("returnnya string jadi langsung return saja, bukan seperti obj");
}

const message = await samplePromise();
console.info(message);