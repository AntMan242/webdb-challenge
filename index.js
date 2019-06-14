const server = require('./api/server')

const port = 7500;
server.listen(port, () => {
    console.log(`\n* Active on ${port} *\n`);
});