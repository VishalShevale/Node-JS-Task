# Node-JS-Task
# Node Task Queue with Rate Limiting

This project implements a Node.js API for task queueing with rate limiting using Redis and Bull.

## Requirements

- Node.js
- Redis

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/VishalShevale/Node-JS-Task.git
   cd your-repo

2. install dependency :
    npm i
    npm i express


3. install and start redis server
    https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/install-redis-on-linux/#install-on-ubuntu-debian

    start the server :  redis-server
    Stop the server : sudo service redis-server stop

4. start the application:
    npm start

5. Test the api :
    curl -X POST http://localhost:3000/api/v1/task -H "Content-Type: application/json" -d '{"user_id": "123"}'

    for windows :
    Invoke-WebRequest -Uri "http://localhost:3000/api/v1/task" `
  -Method POST `
  -Headers @{ "Content-Type" = "application/json" } `
  -Body '{"user_id": "123"}'


