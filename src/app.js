const express = require('express');
const taskProcessor = require('./jobs/taskProcessor');
const taskQueue = require('./config/redis').taskQueue;
const { handleTaskRequest } = require('./api/taskController');

const app = express();
app.use(express.json());

taskQueue.process(taskProcessor);

app.post('/api/v1/task', handleTaskRequest);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
