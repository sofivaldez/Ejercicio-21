module.exports = (sequelize, Model, DataTypes) => {
  class Roles extends Model {}

  Roles.init(
    {
      id: {
        type: DataTypes.TEXT,
      },
      name: {
        type: DataTypes.TEXT,
      },
      code: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "role",
    },
  );

  return Roles;
};
