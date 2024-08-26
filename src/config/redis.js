const Redis = require('ioredis');
const Queue = require('bull');

const redisClient = new Redis();
const taskQueue = new Queue('tasks', { redis: { host: '127.0.0.1', port: 6379 } });

taskQueue.on('completed', (job) => {
    console.log(`Job with ID ${job.id} completed.`);
});

taskQueue.on('failed', (job, err) => {
    console.log(`Job with ID ${job.id} failed with error ${err.message}`);
});

module.exports = { client: redisClient, taskQueue };
