const server = require('./server.js')

const port = 7500;
server.listen(port, () => {
    console.log(`\n* Active on ${port} *\n`);
});