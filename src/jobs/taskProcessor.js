const { task } = require('./taskHandler');
const { checkRateLimit } = require('../config/rateLimit');
const redisClient = require('../config/redis').client;

const processTask = async (job) => {
    const { user_id } = job.data;

    if (await checkRateLimit(user_id, redisClient)) {
        await task(user_id);
    } else {
        await job.moveToDelayed(Date.now() + 1000); // Delay the task for 1 second
    }
};

module.exports = processTask;
