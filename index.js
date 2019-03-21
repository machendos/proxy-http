'use strict';

const http = require('http');
const fs = require('fs');
const join = require('path').join;

const LOG_FILE = join(__dirname, 'log.txt');

const createLogString = (clientAddress, destinationAddress) =>
  new Date() +
  ' ' +
  clientAddress +
  ' -> ' +
  destinationAddress +
  '\n';

const proxy = http.createServer((proxyReq, proxyRes) => {
  proxyRes.end('END');
  const clientAddress = proxyReq.socket.address;
  const destinationAddress = proxyReq.headers.host;
  const logString = createLogString(clientAddress, destinationAddress);

  // fs.writeFile(LOG_FILE, logString, { flag: 'a' }, err => {
  //   if (err) {
  //     console.log(err);
  //     process.exit(1);
  //   }
  // });

  // proxyRes.setHeader('content-type', 'text/html');

  // const options = {
  //   host: destinationAddress,
  //   method: proxyReq.method,
  //   headers: {
  //     'content-type': 'text/html'
  //   }
  // };

  // const mainReq = http.request(options, mainRes => {
  //   mainRes.pipe(proxyRes);
  // });

  // mainReq.end();

});

proxy.listen(2001);
