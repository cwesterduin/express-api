const server = require('./app.js')
const port = 3000

server.listen(port, () => console.log(`\nExpress departing now from port 3000!\n`))