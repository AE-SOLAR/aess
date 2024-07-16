module.exports = (sequelize, Sequelize) => {
  const Company = sequelize.define("company", {
    uuid: {
      type: Sequelize.UUID,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
  });

  return Company;
};
