// Create web server

const mime = require('mime');

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);
  if (pathname
    .toLowerCase()
    .startsWith('/comments')) {
    const filename = pathname.slice(1);
    const type = mime.getType(filename);
    res.writeHead(200, {
      'Content-Type': type,
    });
    const stream = fs.createReadStream(filename);
    stream.pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});