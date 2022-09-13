# Improve response times 10x by introducing an interceptor in NestJS


`autocannon -d 10 -c 10 http://127.0.0.1:3000/before`

`autocannon -d 10 -c 10 http://127.0.0.1:3000/after`

## 5ms delay on a job (synthetic)

(before) \
Latency 7.41 ms \
Req/Sec  1247 \
12k requests in 10.02s, 2.98 MB read \\

(after) \
Latency 1.48 ms \
Req/Sec 4997 \
50k requests in 10.01s, 11.9 MB read


## 25ms delay on a job (synthetic)

(before)
Latency 31.9 ms
Req/Sec 309.5
3k requests in 10.04s, 740 kB read

(after)
Latency 1.3 ms
Req/Sec 5483.55
60k requests in 11.01s, 14.4 MB read


## Redis localhost queue

first run redis with persistence
`docker run -p 6379:6379 --name redis -d redis --save 60 1 --loglevel warning`

stop service
`docker stop redis`

start service
`docker start redis`

copy env values
`cp .env.example .env`

fill in your redis credentials if they are not `localhost:6379`

(before)
Latency 1.76 ms
Req/Sec 4424.61 │ 872.51 │ 2367   │
44k requests in 10.01s, 10.6 MB read

(after)
Latency 2.42 ms
Req/Sec 3674.73
40k requests in 11.01s, 9.66 MB read


## Remote Redis (EU to EU)

`autocannon -d 10 -c 10 http://127.0.0.1:3000/redis/before`

`autocannon -d 10 -c 10 http://127.0.0.1:3000/redis/after`

(before)
Latency 64.36 ms
Req/Sec 153.6
2k requests in 10.03s, 367 kB read


(after)
Latency 2.09 ms
Req/Sec 3866.8
39k requests in 10.02s, 9.24 MB read
