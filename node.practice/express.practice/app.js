const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
// app.use("/", indexRouter);
const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];
const animals = ["gato", "perro", "conejo"];

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users, animals: animals });
});
app.get("/about", (req, res) => {
  res.render("about", { links: links, users: users, animals: animals });
});

app.use((err, req, res, next) => {
  console.error(err);
  // We can now specify the `err.statusCode` that exists in our custom error class and if it does not exist it's probably an internal server error
  res.status(err.statusCode || 500).send(err.message);
  console.log(err.message);
  console.log(err.name);
});

const PORT = 4500;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
