const { faker } = require("@faker-js/faker");
const { bg } = require("date-fns/locale");
const { Article, User, Comment } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const articles = [];

  for (let i = 0; i < 30; i++) {
    articles.push({
      title: faker.lorem.sentence(5),
      content: faker.lorem.paragraphs(),
      imageName: "post-bg.jpg",
    });
  }

  await Article.bulkCreate(articles);
  // Seeder de usuarios.
  const users = [];

  for (let i = 0; i < 30; i++) {
    users.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
    });
  }

  await User.bulkCreate(users);

  // Seeder de comentarios
  const comments = [];

  for (let i = 0; i < 30; i++) {
    comments.push({
      content: faker.lorem.paragraphs(10),
    });
  }

  await Comment.bulkCreate(comments);
  console.log("[Database] Se corrió el seeder de Articles, Users y Comment");
};
