const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  dialect: config.dialect,
  host: config.HOST,
  port: config.PORT,
  showWarnings: true,
  connectTimeout: 10000,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
  logging: false,
  retry: {
    max: 50,
    timeout: 3000,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.company = require("../models/company.model.js")(sequelize, Sequelize);

const { Series, Panel, CellType, ModuleDesign, Color, BackCoverType } =
  require("./panel.model.js")(sequelize, Sequelize);
db.series = Series;
db.panel = Panel;
db.cellType = CellType;
db.moduleDesign = ModuleDesign;
db.color = Color;
db.backCoverType = BackCoverType;

db.link = require("../models/link.model.js")(sequelize, Sequelize);
db.linkPanel = sequelize.define("link_panel", {
  panel_id: {
    type: Sequelize.INTEGER,
    references: {
      model: db.panel,
      key: "id",
    },
  },
  link_id: {
    type: Sequelize.INTEGER,
    references: {
      model: db.link,
      key: "id",
    },
  },
});

db.panel.belongsToMany(db.link, {
  through: db.linkPanel,
  foreignKey: "panel_id",
});
db.link.belongsToMany(db.panel, {
  through: db.linkPanel,
  foreignKey: "link_id",
});

db.role.belongsToMany(db.user, { through: "user_roles" });
db.user.belongsToMany(db.role, { through: "user_roles" });

db.company.belongsToMany(db.user, { through: "user_company" });
db.user.belongsTo(db.company, { through: "user_company" });

db.ROLES = ["user", "admin", "moderator"];

// Create data
// const createMockData = require("../mock")(db, sequelize);
// createMockData();
// db.role.findOrCreate({
//   where: { id: 1 },
//   id: 1,
//   name: "user",
// });
// db.role.findOrCreate({
//   where: { id: 2 },
//   id: 2,
//   name: "moderator",
// });
// db.role.findOrCreate({
//   where: { id: 3 },
//   id: 3,
//   name: "admin",
// });

module.exports = db;
