'use strict';

const http = require('http');

const proxy = http.createServer((req, res) => {
  const options = {
    host: req.headers.host,
    headers: req.headers,
    method: req.method
  };
  // res.end('end');
  const requ = http.request(options, res1 => {
    // res1.on('data', chunk => console.log(chunk));
    res1.pipe(res);
  });
  // setTimeout(() => {res.end('srtr'), 3000});
  requ.end();
});

proxy.listen(2001);
