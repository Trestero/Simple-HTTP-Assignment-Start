const http = require('http');

// handler JS files
const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');
const textHandler = require('./textResponses.js');


const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1:${port}`);