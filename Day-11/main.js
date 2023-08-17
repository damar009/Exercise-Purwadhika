const FoodOrderQueue = require('./queue');

const queue = new FoodOrderQueue();
const orders = [1, 2, 3, 4];

console.log('Add orders to queue');
orders.forEach(order => queue.enqueue(order));

async function runQueue() {
    console.log('Run process -> process queue based on random interval');
    while (queue.queue.length > 0) {
        await queue.processQueue();
    }
}

runQueue();
