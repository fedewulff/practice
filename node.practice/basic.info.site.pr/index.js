const express = require("express");
const app = express();
const fs = require("fs");
const port = 8000;

app.get("/", (req, res) => {
  fs.readFile("index.html", function (error, data) {
    errorData(res, error, data);
  });
});
app.get("/about", (req, res) => {
  fs.readFile("about.html", function (error, data) {
    errorData(res, error, data);
  });
});
app.get("/contact-me", (req, res) => {
  fs.readFile("contact-me.html", function (error, data) {
    errorData(res, error, data);
  });
});
app.get("*", (req, res) => {
  fs.readFile("404.html", function (error, data) {
    errorData(res, error, data);
  });
});

function errorData(var0, var1, var2) {
  if (var1) {
    var0.writeHead(404);
    var0.write("Error: File not found");
  } else {
    var0.write(var2);
  }
  var0.end();
}

app.listen(port);

//ESTA ES UNA FORMA

// const http = require("http");
// const port1 = 8000;
// const fs = require("fs");
// const server1 = http.createServer(function (req, res) {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   if (req.url === "/") {
//     fs.readFile("index.html", function (error, data) {
//       errorData(res, error, data);
//     });
//   }
//   else if (req.url === "/about") {
//     fs.readFile("about.html", "utf8", function (error, data) {
//       errorData(res, error, data);
//     });
//   }
//   else if (req.url === "/contact-me" || req.url === "/contact-me.html") {
//     fs.readFile("contact-me.html", function (error, data) {
//       errorData(res, error, data);
//     });
//   } else {
//     fs.readFile("404.html", function (error, data) {
//       errorData(res, error, data);
//     });
//   }
// });

// function errorData(var0, var1, var2) {
//     if (var1) {
//       var0.writeHead(404);
//       var0.write("Error: File not found");
//     } else {
//       var0.write(var2);
//     }
//     var0.end();
//   }

// server1.listen(port1);

//ESTA ES OTRA FORMA

// const http = require("http");
// const port = 8000;
// const { readFile } = require("fs/promises");

// const handler = async (req, res) => {
//   if (req.url === "/" || req.url === "/index.html") {
//     const data = await readFile("./index.html", "utf8");

//     res.writeHeader(200, { "Content-Type": "text/html" });
//     res.write(data);
//     res.end();
//   } else if (req.url === "/about" || req.url === "/about.html") {
//     const data = await readFile("./about.html", "utf8");

//     res.writeHeader(200, { "Content-Type": "text/html" });
//     res.write(data);
//     res.end();
//   } else if (req.url === "/contact-me" || req.url === "/contact-me.html") {
//     const data = await readFile("./contact-me.html", "utf8");

//     res.writeHeader(200, { "Content-Type": "text/html" });
//     res.write(data);
//     res.end();
//   } else {
//     const data = await readFile("./404.html", "utf8");
//     res.statusCode = 404;
//     res.setHeader("Content-Type", "text/html");
//     res.end(data);
//   }
// };

// const server = http.createServer(handler);

// server.listen(port);
