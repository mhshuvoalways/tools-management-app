const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const serverError = require("../utils/serverError");
const {
  registerValidation,
  loginValidation,
} = require("../validations/userValidation");

const adminLogin = (req, res) => {
  const { ADMIN_USER, ADMIN_PASSWORD } = process.env;
  const { email, password } = req.body;
  const validation = loginValidation({ email, password });
  if (validation.isValid) {
    if (ADMIN_USER === email) {
      if (ADMIN_PASSWORD === password) {
        const token = jwt.sign(
          {
            _id: ADMIN_PASSWORD,
            email: ADMIN_USER,
          },
          process.env.SECRET,
          { expiresIn: "1h" }
        );
        res.status(200).json({
          message: "Welcome back!",
          token,
        });
      } else {
        res.status(400).json({
          message: "Password doesn't match!",
        });
      }
    } else {
      res.status(400).json({
        message: "You are not admin!",
      });
    }
  } else {
    res.status(400).json(validation.error);
  }
};

const userRegister = (req, res) => {
  const { name, email, password } = req.body;
  const validation = registerValidation(req.body);
  if (validation.isValid) {
    User.findOne({ email })
      .then((response) => {
        if (!response) {
          bcrypt.hash(password, 10, function (err, hash) {
            if (err) {
              serverError(res);
            } else {
              const curstomer = {
                name,
                email,
                password: hash,
              };
              new User(curstomer)
                .save()
                .then((createUser) => {
                  const token = jwt.sign(
                    {
                      _id: createUser._id,
                      name,
                      email: createUser.email,
                    },
                    process.env.SECRET,
                    { expiresIn: "1hr" }
                  );
                  res.status(200).json({
                    message: "Thanks for register!",
                    response: createUser,
                    token,
                  });
                })
                .catch(() => {
                  serverError(res);
                });
            }
          });
        } else {
          res.status(400).json({
            message: "User already exists!",
          });
        }
      })
      .catch(() => {
        serverError(res);
      });
  } else {
    res.status(400).json(validation.error);
  }
};

const userLogin = (req, res) => {
  const { email, password } = req.body;
  const validation = loginValidation({ email, password });
  if (validation.isValid) {
    User.findOne({ email })
      .then((response) => {
        if (response) {
          bcrypt.compare(password, response.password, function (err, result) {
            if (result) {
              const token = jwt.sign(
                {
                  _id: response._id,
                  name: response.name,
                  email: response.email,
                },
                process.env.SECRET,
                { expiresIn: "1h" }
              );
              res.status(200).json({
                message: "Welcome back!",
                response,
                token,
              });
            } else {
              res.status(400).json({
                message: "Password doesn't match!",
              });
            }
            if (err) {
              serverError(res);
            }
          });
        } else {
          res.status(400).json({
            message: "User not found!",
          });
        }
      })
      .catch(() => {
        serverError(res);
      });
  } else {
    res.status(400).json(validation.error);
  }
};

const getUser = (req, res) => {
  if (process.env.ADMIN_USER === req.user.email) {
    User.find()
      .select("-password")
      .then((response) => {
        res.status(200).json(response);
      })
      .catch(() => {
        serverError(res);
      });
  }
};

module.exports = {
  adminLogin,
  userRegister,
  userLogin,
  getUser,
};
