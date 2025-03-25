const usersStorage = require("../storages/usersStorage");

// exports.usersCreatePost = (req, res) => {
//   const { firstName, lastName } = req.body;
//   usersStorage.addUser({ firstName, lastName });
//   res.redirect("/");
// };
//
const { body, validationResult } = require("express-validator");

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 10 characters.";

const validateUser = [
  body("firstName")
    .trim()
    .notEmpty()
    .isAlpha()
    .withMessage(`First name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`First name ${lengthErr}`),
  body("lastName")
    .trim()
    .notEmpty()
    .isAlpha()
    .withMessage(`Last name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`Last name ${lengthErr}`),
  body("email").trim().notEmpty().isEmail().withMessage(`Not a valid email`),
  body("age").isInt({ min: 18, max: 200 }).withMessage(`Not a valid age`),
  body("bio").isLength({ max: 200 }).withMessage(`Not a valid bio`),
];

// We can pass an entire array of middleware validations to our controller.
exports.usersListGet = (req, res) => {
  res.render("index", {
    title: "User list",
    users: usersStorage.getUsers(),
  });
};

exports.usersCreatePost = [
  validateUser,
  (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("createUser", {
        title: "Create user",
        errors: errors.array(),
      });
    }
    const { firstName, lastName, email, age, bio } = req.body;
    usersStorage.addUser({ firstName, lastName, email, age, bio });
    res.redirect("/");
  },
];

exports.usersCreateGet = (req, res) => {
  res.render("createUser", {
    title: "Create user",
  });
};
//UPDATE
exports.usersUpdateGet = (req, res) => {
  const user = usersStorage.getUser(req.params.id);
  res.render("updateUser", {
    title: "Update user",
    user: user,
  });
};

exports.usersUpdatePost = [
  validateUser,
  (req, res) => {
    const user = usersStorage.getUser(req.params.id);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("updateUser", {
        title: "Update user",
        user: user,
        errors: errors.array(),
      });
    }
    const { firstName, lastName, email, age, bio } = req.body;
    usersStorage.updateUser(req.params.id, { firstName, lastName, email, age, bio });
    res.redirect("/");
  },
];
//DELETE
exports.usersDeletePost = (req, res) => {
  usersStorage.deleteUser(req.params.id);
  res.redirect("/");
};
//FILTER
exports.searchUser = (req, res) => {
  console.log(req.query);
  const matchedUsers = [];
  let noMatch;
  if (req.query.name || req.query.email) {
    const searchedName = req.query.name.split(" ").join("").toLowerCase();
    const searchedEmail = req.query.email.toLowerCase();
    const allUsers = usersStorage.getUsers();
    for (let i = 0; i < allUsers.length; i++) {
      const fullName = `${allUsers[i].firstName}${allUsers[i].lastName}`
        .split(" ")
        .join("")
        .toLowerCase();
      const email = allUsers[i].email;
      if (searchedName === fullName && searchedEmail === email) {
        matchedUsers.push(allUsers[i]);
      } else if (
        (searchedName === fullName && !searchedEmail) ||
        (!searchedName && searchedEmail === email)
      ) {
        matchedUsers.push(allUsers[i]);
      }
    }
    noMatch = `NO MATCH FOUND`;
  }

  res.render("searchUser", {
    title: "Search user",
    users: matchedUsers,
    noMatch: noMatch,
  });
};
