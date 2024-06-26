const express = require("express");

const authRouter = express.Router();
authRouter.use(express.json());

authRouter.get("/", async (req, res) => {
  res.send({ name: "Auth API v1.0.0", state: "ok" });
});

module.exports = authRouter;
