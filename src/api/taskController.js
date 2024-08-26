const taskQueue = require('../config/redis').taskQueue;

exports.handleTaskRequest = (req, res) => {
    const { user_id } = req.body;

    if (!user_id) {
        return res.status(400).json({ message: 'user_id is required' });
    }

    taskQueue.add({ user_id });
    res.status(200).json({ message: 'Task received and queued.' });
};
