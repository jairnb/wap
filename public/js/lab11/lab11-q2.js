
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('./city.jpg', (err, data) => {
        if (err) throw err;
        res.end(data);
    });
}).listen(3000, () => console.log('listening on 3000'));


const server = require('http').createServer();
server.on('request', (req, res) => {
    const src = fs.createReadStream('./city.jpg');
    src.pipe(res);
});
server.listen(8000, () => console.log('listening on 8000'));



http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    let img = fs.readFileSync('./city.jpg');
    res.end(img);
}).listen(4000, () => { console.log('listening on 4000...') });