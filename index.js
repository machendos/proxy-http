// 'use strict';

const http = require('http');


const proxy = http.createServer((req, res) => {
  console.log(req.url);

  const options = {
    host: req.headers.host,
    headers: req.headers,
    method: req.method
  }
  console.log(options);
  // console.log(options);

  const requ = http.request(options, res1 => {
    console.log(1);
    res1.on('data', chunk => console.log(chunk));
    res1.pipe(res);
  });
  requ.end();
});

proxy.listen(2001, () => console.log('Listen on 2001'));
