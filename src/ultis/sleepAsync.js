function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function sleepAsync(ms, callback) {
    await delay(ms);
    callback();
}

export default sleepAsync;
