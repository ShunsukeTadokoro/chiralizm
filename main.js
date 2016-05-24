'use strict';

const colors    = require('colors');
const http      = require('http');
const httpProxy = require('http-proxy');
const argv      = require('argv');
const args      = argv.run().targets;

if (args.length < 2) { throw new Error("listening port & proxy url are needed.") };

const listenPort = parseInt(args[0], 10);
const proxyUrl   = (args[1].toString().startsWith('http')) ? args[1] : 'http://' + args[1];
const proxy      = httpProxy.createProxyServer({});

proxy.on('proxyReq', function(proxyReq, req, res, options) {

  const url = req.headers.host + req.url;
  console.log(`${req.method}: ${url}`.cyan.bold);

  if (req.method != 'GET') {
    var bodyString = '';
    req.on('data', function (data) {
      bodyString += data;
    });

    req.on('end', function () {
      console.log(bodyString);
    });
  };
});

const server = http.createServer(function(req, res) {
  proxy.web(req, res, {
    target: proxyUrl
  });
});

console.log('Proxy server starts on ' + `http://localhost:${listenPort}\n`.green);

server.listen(listenPort);
