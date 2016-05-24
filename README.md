# Chiralizm
A **very simple** HTTP request observing tool for debug.

![Screenshot](https://raw.githubusercontent.com/ShunsukeTadokoro/chiralizm/readme-asset/screenshot.png)

## Getting Started
1. `git clone https://github.com/ShunsukeTadokoro/chiralizm.git`
1. `cd chiralizm`
1. `npm install`
1. `npm run start 9090 example.com`
1. `curl -i -X POST -d 'key=value' 'http://localhost:9090'`

Requst `http://localhost:9090'` is proxied to `http://example.com`.  
Request URL and body are shown in your terminal.

## Contributing
Bug reports and pull requests are welcome on GitHub at [https://github.com/ShunsukeTadokoro/chiralizm](https://github.com/ShunsukeTadokoro/chiralizm)
