require("dotenv").config();

// const { Pool } = require("pg");

// // All of the following properties should be read from environment variables
// // We're hardcoding them here for simplicity
// module.exports = new Pool({
//   host: "localhost", // or wherever the db is hosted
//   user: "fedewulff",
//   database: "top_users",
//   password: "986753.Apestosa",
//   port: 5432, // The default port
// });

const { Pool } = require("pg");

// Again, this should be read from an environment variable
module.exports = new Pool({
  connectionString: process.env.CONNECTION_STRING,
});

const { argv } = require("node:process");

// print process.argv
argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
