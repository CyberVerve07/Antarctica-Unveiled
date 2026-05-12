import http from 'node:http';

const port = Number(process.env.PORT ?? 8080);

const server = http.createServer((req, res) => {
  res.writeHead(200, {'content-type': 'application/json'});
  res.end(JSON.stringify({ok: true, path: req.url}));
});

server.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`);
});

