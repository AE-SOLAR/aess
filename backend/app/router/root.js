const express = require("express");

const rootRouter = express.Router();
rootRouter.use(express.json());

rootRouter.get("/", async (req, res) => {
  res.send({ name: "AE SOLAR Online Shop API v1.0.0", state: "ok" });
});

module.exports = rootRouter;
