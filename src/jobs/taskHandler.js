const fs = require('fs');
const path = require('path');
const logFilePath = path.join(__dirname, '../../logs/task_log.txt');

async function task(user_id) {
    const logMessage = `${user_id} - task completed at - ${new Date().toISOString()}\n`;
    fs.appendFileSync(logFilePath, logMessage);
    console.log(logMessage);
}

module.exports = { task };
