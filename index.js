const handler = require('serve-handler');
const http = require('http');
const https = require("https");
const url = require("url");

const server = http.createServer((req, res) => {
 const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === "/cors") {
    const target = parsedUrl.query.url;

    if (!target) {
      res.writeHead(400, { "Content-Type": "text/plain" });
      return res.end("Usage: /cors?url=https://example.com");
    }

    // Tambahkan header CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
      return res.end();
    }

    // Gunakan langsung https request
    https.get(target, (proxyRes) => {
      res.writeHead(proxyRes.statusCode, proxyRes.headers);
      proxyRes.pipe(res);
    }).on("error", (err) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Proxy error: " + err.message);
    });

  } else {
    // Selain /cors -> serve file statis
    return handler(req, res);
  }
});

server.listen(3000, () => {
  console.log('Running at http://localhost:3000');
});