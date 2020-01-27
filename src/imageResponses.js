// Node imports
const fs = require('fs');

// Fields
const spongegar = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

// Handler
const getSpongeGar = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(spongegar);
  response.end();
};

// Exports
module.exports.getSpongeGar = getSpongeGar;
