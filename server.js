const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, "good", { "Content-type": "text/html" });
  if (req.url === "/home.html" || req.url === "/") {
    fs.readFile("./path_module/home.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(404, "BAD", { "Content-type": "text/html" });
        res.end("<h1>404 not found</h1>");
      } else {
        res.end(data);
      }
    });
  } else if (req.url === "/about.html") {
    fs.readFile("./path_module/about.html", (err, data) => {
      if (err) {
        res.end("<h1>page not found</h1>");
      } else {
        res.end(data);
      }
    });
  } else if (req.url === "/contact.html") {
    fs.readFile("./path_module/contact.html", "utf-8", (err, data) => {
      if (err) {
        res.end("<h1>404 page not found</h1>");
      } else {
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, "BAD", { "Content-type": "text/html" });
    res.end("<h1>404 page not found</h1>");
  }
});

server.listen(5000, () => console.log(`server is running on port 5000`));
