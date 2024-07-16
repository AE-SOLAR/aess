module.exports = (sequelize, Sequelize) => {
  const Link = sequelize.define(
    "link",
    {
      tooltip: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      link: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      icon: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      newTab: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        field: "new_tab",
        defaultValue: false,
      },
    },
    {
      indexes: [
        {
          name: "links_unique_index",
          unique: true,
          fields: ["link", "tooltip"],
        },
      ],
    }
  );
  return Link;
};
