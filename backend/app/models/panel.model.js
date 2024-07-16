module.exports = (sequelize, Sequelize) => {
  const Panel = sequelize.define(
    "panel",
    {
      model: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      powerRange: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "power_range",
      },
      length: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      width: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      height: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      weight: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      applications: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      indexes: [
        {
          name: "panel_unique_index",
          unique: true,
          fields: [
            "series_id",
            "model",
            "power_range",
            "cell_type_id",
            "design_id",
            "back_cover_type_id",
          ],
        },
      ],
    }
  );

  const Series = sequelize.define("series", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  });

  const CellType = sequelize.define("cell_type", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  });

  const ModuleDesign = sequelize.define("module_design", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  });

  const Color = sequelize.define("color", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  });

  const BackCoverType = sequelize.define("back_cover_type", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  });

  Panel.belongsTo(Series, { foreignKey: "series_id", as: "series" });
  Series.hasMany(Panel, { foreignKey: "series_id", as: "panels" });

  Panel.belongsTo(CellType, { foreignKey: "cell_type_id", as: "cell_type" });
  CellType.hasMany(Panel, { foreignKey: "cell_type_id", as: "panels" });

  Panel.belongsTo(ModuleDesign, {
    foreignKey: "design_id",
    as: "module_design",
  });
  ModuleDesign.hasMany(Panel, { foreignKey: "design_id", as: "panels" });

  Panel.belongsTo(Color, { foreignKey: "module_color_id", as: "module_color" });
  Color.hasMany(Panel, {
    foreignKey: "module_color_id",
    as: "module_color_panels",
  });

  Panel.belongsTo(Color, { foreignKey: "frame_color_id", as: "frame_color" });
  Color.hasMany(Panel, {
    foreignKey: "frame_color_id",
    as: "frame_color_panels",
  });

  Panel.belongsTo(BackCoverType, {
    foreignKey: "back_cover_type_id",
    as: "back_cover_type",
  });
  BackCoverType.hasMany(Panel, {
    foreignKey: "back_cover_type_id",
    as: "panels",
  });

  return { Series, Panel, CellType, ModuleDesign, Color, BackCoverType };
};
