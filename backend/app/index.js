// Fake API Server
const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const {products} = require("./mock/products");


const app = express();
const PORT = 3037;
const SECRET_KEY = "24eAc/xCzqCNvEIJyUMhJI+Ic51h7b3/D2c7QvkV96A=";

app.use(bodyParser.json());

const users = [
  {
    id: 1,
    username: "user1",
    password: "password1",
    profile: { name: "User One", email: "user1@example.com" },
  },
  {
    id: 2,
    username: "user2",
    password: "password2",
    profile: { name: "User Two", email: "user2@example.com" },
  },
];

app.post("/auth/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

function authenticateToken(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) return res.sendStatus(403);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id, 10);
  const product = products.find((p) => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.get("/profile", authenticateToken, (req, res) => {
  const user = users.find((u) => u.id === req.user.id);
  if (user) {
    res.json(user.profile);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.get("/", (req, res) => {
  res.send("Fake API Server");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
