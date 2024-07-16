const db = require("../models");
const config = require("../config/auth.config");
const { v7: uuid } = require("uuid");
const User = db.user;
const Session = db.session;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  let newUserRole = 1;

  User.findAll({ limit: 1 }).then((users) => {
    if (users.length === 0) {
      newUserRole = 3;
    }
  });

  User.create({
    uuid: uuid(),
    username: req.body.username || req.body.email,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  })
    .then((user) => {
      user.setRoles([newUserRole]).then(() => {
        res.send({ message: "User registered successfully!", uuid: user.uuid });
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      [Op.or]: [
        { username: req.body.username || "" },
        { email: req.body.email || "" },
      ],
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }

      const token = jwt.sign(
        {
          id: user.uuid,
        },
        config.secret,
        {
          algorithm: "HS256",
          allowInsecureKeySizes: true,
          expiresIn: "10d",
        }
      );

      var authorities = [];
      user.getRoles().then((roles) => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token,
        });
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
