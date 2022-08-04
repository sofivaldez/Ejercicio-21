const { User } = require("../models");
const passport = require("passport");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function showLogin(req, res) {
  res.render("login");
}

// Show the form for creating a new resource
async function showRegister(req, res) {
  res.render("register");
}

// Store a newly created resource in storage.
async function createNewUser(req, res) {
  const [user, created] = await User.findOrCreate({
    where: {
      username: req.body.username,
      email: req.body.email,
    },
    defaults: {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    },
  });
  if (created) {
    res.redirect("/login");
  } else {
    res.redirect("/login");
  }
}

// Show the form for editing the specified resource.
function logOut(req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  showLogin,
  showRegister,
  createNewUser,
  logOut,
  update,
  destroy,
};
