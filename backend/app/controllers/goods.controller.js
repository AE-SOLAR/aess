const { Op } = require("sequelize");
const { authJwt } = require("../middleware");
const db = require("../models");

exports.panelsList = async (req, res) => {
  const user = await authJwt.getUserByToken(req.headers["x-access-token"]);
  const where = [];
  for (const key in req.query) {
    switch (key) {
      case "series":
        where.push({
          "$series.name$": { [Op.like]: `%${req.query.series}%` },
        });
        break;
      case "model":
        where.push({
          model: { [Op.like]: `%${req.query.model}%` },
        });
        break;
      case "cell":
        where.push({
          "$cell_type.name$": { [Op.like]: `%${req.query.cell}%` },
        });
        break;
      case "cover":
        where.push({
          "$back_cover_type.name$": { [Op.like]: `%${req.query.cover}%` },
        });
        break;
      case "design":
        where.push({
          "$module_design.name$": { [Op.like]: `%${req.query.design}%` },
        });
        break;
    }
  }
  const panels = await db.panel.findAll({
    include: [
      { model: db.series, as: "series", attributes: ["name"] },
      { model: db.cellType, as: "cell_type", attributes: ["name"] },
      { model: db.moduleDesign, as: "module_design", attributes: ["name"] },
      { model: db.color, as: "module_color", attributes: ["name"] },
      { model: db.color, as: "frame_color", attributes: ["name"] },
      { model: db.backCoverType, as: "back_cover_type", attributes: ["name"] },
    ],
    where: where.length ? { [Op.and]: where } : {},
  });

  res.status(200).send(panels);
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
