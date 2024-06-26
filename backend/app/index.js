const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const port = process.env.SERVER_PORT || 3000;

const { rootRouter, authRouter } = require("./router");

app.use("/api/v1", rootRouter);
app.use("/api/v1/auth", authRouter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: false,
  })
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
