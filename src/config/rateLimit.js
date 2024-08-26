const checkRateLimit = async (user_id, redisClient) => {
    const userRateKey = `rate:${user_id}`;
    const [lastTaskTime, taskCount] = await redisClient.hmget(userRateKey, 'lastTaskTime', 'taskCount');

    const currentTime = Date.now();
    const oneSecondAgo = currentTime - 1000;
    const oneMinuteAgo = currentTime - 60000;

    if (lastTaskTime && parseInt(lastTaskTime) > oneSecondAgo) {
        // Task executed within the last second
        return false;
    }

    if (taskCount && parseInt(taskCount) >= 20 && parseInt(lastTaskTime) > oneMinuteAgo) {
        // Task count exceeds 20 in the last minute
        return false;
    }

    // Update rate limits
    const newTaskCount = (taskCount && parseInt(taskCount) >= 20 && parseInt(lastTaskTime) <= oneMinuteAgo) 
        ? 1 
        : (taskCount ? parseInt(taskCount) + 1 : 1);

    await redisClient.hmset(userRateKey, {
        lastTaskTime: currentTime,
        taskCount: newTaskCount
    });

    return true;
};

module.exports = { checkRateLimit };
