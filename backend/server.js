const http = require("http");
const app = require("./app");

// set port for app
app.set("port", process.env.PORT || 3000);
//create server using app.js ( node creates server using express app)
const server = http.createServer(app);

server.listen(process.env.PORT || 3000);
