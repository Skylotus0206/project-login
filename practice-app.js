//^ open server with http
//! why should we use express.js to create server?
//! 1. too many codes required 2. encode Korean to be displayed
const http = require('http'); //* built-in module in node.js
const app = http.createServer((req, res) => {
  //* send html among txt file and read as utf-8 (translate to Korean)
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  if (req.url === '/') {
    res.end('여기는 루트 입니다');
  } else if (req.url === '/login') {
    res.end('this is a login page');
  }
  // console.log(req.url); //* 'req.url': we can parse the url after the root('/') ex) localhost: 3001/kkk
});

app.listen(3001, () => {
  console.log('server operating with http');
});
