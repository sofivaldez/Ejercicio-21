const { Article } = require("../models");
const { format } = require("date-fns");
const diaCreacion = format(new Date(), `MMMM dd',' yyyy `);

async function showHome(req, res) {
  const articles = await Article.findAll();
  // console.log(articles);
  res.render("home", { articles, format });
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
