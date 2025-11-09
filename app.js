const http = require('http');
const { requestHandle } = require('./handle');

const server = http.createServer(requestHandle);
const PORT = 3000;
server.listen(PORT,() =>{
    console.log(`server running at:- http://localhost:${PORT}`);
})