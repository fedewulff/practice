const { Router } = require("express");
const { getAuthorById } = require("../controllers/authorController");

const authorRouter = Router();
console.log(123);

authorRouter.get("/", (req, res) => res.send("All authors"));
// authorRouter.get("/:authorId", (req, res) => {
//   console.log(req.params);
//   console.log(req.query);
//   const { authorId } = req.params;
//   res.send(`Author ID: ${authorId}`);
// });
authorRouter.get("/:authorId", getAuthorById);

module.exports = authorRouter;
