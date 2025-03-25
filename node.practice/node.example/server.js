require("dotenv").config();
console.log(process.env);

const http = require("http");
const fs = require("fs");
const port = 4000;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("Error: File not found");
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(port, function (error) {
  if (error) {
    console.log(`error`, error);
  } else {
    console.log(`everything ok ` + port);
  }
});

const { URL } = require("url");

// Example URL
const myURL = new URL("https://www.example.com:8080/pathname?search=query#hash");

console.log(`hash:   ` + myURL.hash);
console.log(`host:   ` + myURL.host); // 'www.example.com'
console.log(`hostname:   ` + myURL.hostname);
console.log(`href:   ` + myURL.href);
console.log(`origin:   ` + myURL.origin);
console.log(`password:   ` + myURL.password);
console.log(`pathname:   ` + myURL.pathname);
console.log(`port:   ` + myURL.port);
console.log(`protocol:   ` + myURL.protocol);
console.log(`search:   ` + myURL.search);
console.log(`searchParams:   ` + myURL.searchParams);
console.log(`username:   ` + myURL.username);
console.log(`JSON.stringify:   ` + JSON.stringify(myURL));

const EventEmitter = require("node:events");
const { Console } = require("node:console");
const eventEmitter = new EventEmitter();

eventEmitter.on("start", (start, end) => {
  console.log(`started from ${start} to ${end}`);
});
eventEmitter.emit("start", 1, 100);

console.log(eventEmitter.eventNames());

const pepe = {
  hola: 123,
  pepito: `tutu`,
};
console.log(pepe);

const { hola } = pepe;
console.log(hola);

const fede = process.env.LOCAL_VAR;
console.log(fede);
console.log(process.env.PEPITO);
console.log(process.env.TUTU);
