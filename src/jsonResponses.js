// local JS imports
const text = require('./textResponses.js');

// Handlers
const getHelloJSON = (request, response) => {
  const helloJSON = {
    message: text.hello,
  };
  const stringMessage = JSON.stringify(helloJSON);
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(stringMessage);
  response.end();
};

const getTimeJSON = (request, response) => {
  const timeJSON = {
    time: text.getTimeString(),
  };
  const stringMessage = JSON.stringify(timeJSON);
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(stringMessage);
  response.end();
};

// Exports
module.exports.getHelloJSON = getHelloJSON;
module.exports.getTimeJSON = getTimeJSON;
