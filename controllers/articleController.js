const { Article, User, Comment } = require("../models");

const { format } = require("date-fns");

// Muestra los articulos por su id.
async function show(req, res) {
  const article = await Article.findByPk(req.params.id, { include: [User, Comment] });
  // return res.json(article);
  // await User.findByPK(article.userId)
  res.render("articleView", { article, format });
}
// Muestra la lista de articulos en la tabla.
async function tableShowArticle(req, res) {
  const articles = await Article.findAll();
  res.render("adminView", { articles, format });
}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

async function destroy(req, res) {
  await Article.destroy({ where: { id: req.params.id } });

  res.redirect("/admin");
}

module.exports = {
  tableShowArticle,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
