const db = require("../db/queries");

//
async function getUsernames(req, res) {
  //console.log(req.query);
  if (req.query.search) {
    const { search } = req.query;
    const usernames = await db.searchedUsernames(search);
    res.send("Usernames that match: " + usernames.map((user) => user.username).join(", "));
    return;
  }
  const usernames = await db.getAllUsernames();
  // console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
}

async function createUsernameGet(req, res) {
  res.render("form");
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

async function deleteUsernames(req, res) {
  db.deleteUsernames();
  res.send("DATA DELETED");
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  deleteUsernames,
};

// exports.usersListGet = (req, res) => {
//   console.log("usernames will be logged here - wip");
//   res.end();
// };
// exports.usersFormGet = (req, res) => {
//   res.render("form");
// };
// exports.usersFormPost = (req, res) => {
//   console.log("username to be saved: ", req.body.username);
//   res.redirect("/new");
// };
