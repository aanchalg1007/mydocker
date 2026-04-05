const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    res.write("Hello from Node App");
    res.end();
}).listen(3000);

console.log('Server running on port 3000');
