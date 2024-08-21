const express = require("express");
const cors = require("cors");

const app = express();

var allowlist = [
  "http://localhost:3000",
  "http://devshop.ae-solar.com:3000",
  "shop.ae-solar.com",
];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

app.use(cors(corsOptionsDelegate));
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
