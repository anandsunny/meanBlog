const http = require('http');
const app = require('./app');
const server = http.createServer(app);
const port = process.env.process || 8000;
server.listen(port);