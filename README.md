# Improve response times 10x by introducing an interceptor in NestJS


`autocannon -d 60 -c 10 http://127.0.0.1:3000/blocking`

`autocannon -d 60 -c 10 http://127.0.0.1:3000/non-blocking`

## 5ms delay on a job (synthetic)

(blocking) \
Latency 7.41 ms \
Req/Sec  1247 \
12k requests in 10.02s

(non-blocking) \
Latency 1.48 ms \
Req/Sec 4997 \
50k requests in 10.01s


## 25ms delay on a job (synthetic)

(blocking) \
Latency 31.9 ms \
Req/Sec 309.5 \
3k requests in 10.04s

(non-blocking) \
Latency 1.3 ms \
Req/Sec 5483.55 \
60k requests in 11.01s


## Redis localhost queue

first run redis with persistence \
`docker run -p 6379:6379 --name redis -d redis --save 60 1 --loglevel warning`

stop service \
`docker stop redis`

start service \
`docker start redis`

copy env values \
`cp .env.example .env`

fill in your redis credentials if they are not `localhost:6379`

(blocking) \
Latency 1.76 ms \
Req/Sec 4424.61 \
44k requests in 10.01s

(non-blocking) \
Latency 2.42 ms \
Req/Sec 3674.73 \
40k requests in 11.01s


## Remote Redis (EU to EU)

`autocannon -d 60 -c 10 http://127.0.0.1:3000/redis/blocking`

`autocannon -d 60 -c 10 http://127.0.0.1:3000/redis/non-blocking`

(blocking) \
Latency 64.36 ms \
Req/Sec 153.6 \
2k requests in 10.03s

(non-blocking) \
Latency 2.09 ms \
Req/Sec 3866.8 \
39k requests in 10.02s
