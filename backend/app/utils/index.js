function sleep(ms, debug = false) {
  if (debug || process.env.NODE_ENV === "development") {
    console.log(`Sleeping for ${ms}ms`);
  }
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function tryWithRetryAsync(foo, retries = 5, delay = 1000) {
  while (retries > 0) {
    try {
      await foo();
    } catch (error) {
      console.log(`Try left ${retries}. Error: ${error.message}`);
      retries -= 1;
      if (retries === 0) {
        throw new Error("Max retries reached");
      }
      await new Promise((res) => setTimeout(res, delay));
    }
  }
}

module.exports = { sleep, tryWithRetryAsync };
