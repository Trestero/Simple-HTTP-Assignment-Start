// Node imports
const fs = require('fs');

// Fields
const index = fs.readFileSync(`${__dirname}/../client/client.html`);

const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);


// Handler methods
const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text.html' });
  response.write(index);
  response.end();
};

const getPage2 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text.html' });
  response.write(page2);
  response.end();
};

// Exports
module.exports.getIndex = getIndex;
module.exports.getPage2 = getPage2;
