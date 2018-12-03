function delay(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    })
};

export function fetchData(id) {
    return delay(Math.random() * 10 * 1000).then(() => Promise.resolve({id}));
};
