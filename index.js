//imports and dependencies
const server = require('./api/server');

//server & port
const PORT = process.env.PORT || 8000;
server.listen(PORT, ()=> console.log(`***running on port ${PORT}***`));