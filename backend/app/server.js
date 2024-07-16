const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = express.Router();
app.use("/api/v1", router);

async function main() {
  const db = require("./models");
  db.sequelize.sync();

  router.get("/", (req, res) => {
    res.json({ message: "Welcome to AE SOLAR API Server." });
  });

  require("./routes/auth.routes")(router);
  require("./routes/user.routes")(router);
  require("./routes/goods.routes")(router);

  const PORT = process.env.API_SERVER_PORT || 3037;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
}

main();
