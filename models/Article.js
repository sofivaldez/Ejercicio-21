module.exports = (sequelize, Model, DataTypes) => {
  class Article extends Model {}

  Article.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.TEXT,
      },
      imageName: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "article",
    },
  );

  return Article;
};
