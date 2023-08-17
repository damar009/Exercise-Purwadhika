class FoodOrderQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(order) {
        this.queue.push(order);
        console.log(`Order added to queue: ${order}`);
    }

    dequeue() {
        return this.queue.shift();
    }

    processQueue() {
        const interval = Math.floor(Math.random() * 10) + 1;
        return new Promise(resolve => {
            setTimeout(() => {
                const processedOrder = this.dequeue();
                console.log(`Queue ${processedOrder} Done in ${interval} seconds`);
                resolve();
            }, interval * 1000);
        });
    }
}

module.exports = FoodOrderQueue;
