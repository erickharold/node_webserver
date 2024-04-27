const http = require('http');

http.createServer((req, res) => {

    res.write('Hola muindo');
    res.end();

}).listen(8080);

console.log('Escuahndo en el puerto 8080');








