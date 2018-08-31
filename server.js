const http = require('http');
const app = (req, res) => {
    res.write('hello world');
    res.end();
}
const server = http.createServer(app);
const port = process.env.process || 8000;
server.listen(port);