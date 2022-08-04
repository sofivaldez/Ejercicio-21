const { Article, User, Comment } = require("../models");
const { format } = require("date-fns");

async function showHome(req, res) {
  // console.log(articles);
  const articles = await Article.findAll({
    include: [User, Comment],
    order: [["createdAt", "DESC"]],
  });
  const user = req.user;
  res.render("home", { articles, format, user });
}

async function showContact(req, res) {
  res.render("contact");
}

async function showAboutUs(req, res) {
  res.render("aboutUs");
}

// Otros handlers...
// ...

module.exports = {
  showHome,
  showContact,
  showAboutUs,
};
