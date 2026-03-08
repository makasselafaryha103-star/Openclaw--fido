const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('OpenClaw fonctionne !');
});

server.listen(process.env.PORT || 3000);
