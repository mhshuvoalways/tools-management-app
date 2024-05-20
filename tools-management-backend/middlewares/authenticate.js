const jwt = require("jsonwebtoken");

module.exports = authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    jwt.verify(token, process.env.SECRET);
    req.user = jwt.verify(token, process.env.SECRET);
    next();
  } catch {
    res.status(400).json({
      message: "You are not authenticated. Please login!",
    });
  }
};
