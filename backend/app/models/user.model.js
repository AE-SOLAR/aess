module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    uuid: {
      type: Sequelize.UUID,
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return User;
};
