# Improve response times 10x by introducing an interceptor in NestJS

This sample project demonstrates the usage of interceptors for improving response times and thorouhput of NestJS apps.

See the full article and benchmark results here: [https://medium.com/@dkhorev/590695692360](https://medium.com/@dkhorev/590695692360)

## Start the app

`npm i`

`npm run start`

## Install load test tool

I used [autocannon](https://www.npmjs.com/package/autocannon).

## Load test commands

All load tests run for 60 second with variable concurrency levels: 10, 50 and 100.

Your results may very depending on your machine.

### 5ms delay on fake job

x10 - x100 Blocking
```bash
autocannon -d 60 -c 10 http://127.0.0.1:3000/blocking-5ms
```
```bash
autocannon -d 60 -c 50 http://127.0.0.1:3000/blocking-5ms
```
```bash
autocannon -d 60 -c 100 http://127.0.0.1:3000/blocking-5ms
```

x10 - x100 Non-blocking
```bash
autocannon -d 60 -c 10 http://127.0.0.1:3000/non-blocking-5ms
```
```bash
autocannon -d 60 -c 50 http://127.0.0.1:3000/non-blocking-5ms
```
```bash
autocannon -d 60 -c 100 http://127.0.0.1:3000/non-blocking-5ms
```

### 25ms delay on fake job

x10 - x100 Blocking
```bash
autocannon -d 60 -c 10 http://127.0.0.1:3000/blocking-25ms
```
```bash
autocannon -d 60 -c 50 http://127.0.0.1:3000/blocking-25ms
```
```bash
autocannon -d 60 -c 100 http://127.0.0.1:3000/blocking-25ms
```

x10 - x100 Non-blocking
```bash
autocannon -d 60 -c 10 http://127.0.0.1:3000/non-blocking-25ms
```
```bash
autocannon -d 60 -c 50 http://127.0.0.1:3000/non-blocking-25ms
```
```bash
autocannon -d 60 -c 100 http://127.0.0.1:3000/non-blocking-25ms
```

### Redis - local and remote

You need to set up Redis conenction first.

#### Redis localhost

first run redis with persistence
```bash
docker run -p 6379:6379 --name redis -d redis --save 60 1 --loglevel warning
```

start service
```bash
docker start redis
```

copy env values
```bash
cp .env.example .env
```

for default Redis container keep everything as is \
for custom Redis connection replace the values in `.env`

#### Load test

x10 - x100 Blocking
```bash
autocannon -d 60 -c 10 http://127.0.0.1:3000/redis/blocking
```
```bash
autocannon -d 60 -c 50 http://127.0.0.1:3000/redis/blocking
```
```bash
autocannon -d 60 -c 100 http://127.0.0.1:3000/redis/blocking
```

x10 - x100 Non-blocking
```bash
autocannon -d 60 -c 10 http://127.0.0.1:3000/redis/non-blocking
```
```bash
autocannon -d 60 -c 50 http://127.0.0.1:3000/redis/non-blocking
```
```bash
autocannon -d 60 -c 100 http://127.0.0.1:3000/redis/non-blocking
```
