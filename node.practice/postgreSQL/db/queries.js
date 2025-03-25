const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");

  return rows;
}

async function searchedUsernames(searchedName) {
  const { rows } = await pool.query("SELECT * FROM usernames WHERE username LIKE ($1)", [
    `%${searchedName}%`,
  ]);
  //   console.log(
  //     await pool.query("SELECT * FROM usernames WHERE username LIKE ($1)", [`%${searchedName}%`])
  //   );
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function deleteUsernames() {
  await pool.query("DELETE FROM usernames");
}

module.exports = {
  getAllUsernames,
  searchedUsernames,
  insertUsername,
  deleteUsernames,
};
