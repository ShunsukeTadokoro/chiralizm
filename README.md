# Chiralizm
A **very simple** HTTP request observing tool for debug.

## Getting Started
1. `git pull xxx`
1. `cd chiralizm`
1. `npm install`
1. `npm run start 9090 example.com`
1. `curl -i -X POST -d 'key=value' 'http://localhost:9090'`

Requst `http://localhost:9090'` is proxied to `http://example.com`.  
Request URL and body are shown in your terminal.

