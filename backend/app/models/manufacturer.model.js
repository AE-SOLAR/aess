module.exports = (sequelize, Sequelize) => {
  const Manufacturer = sequelize.define("manufacturer", {
    uuid: {
      type: Sequelize.UUID,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    website: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  });
};
