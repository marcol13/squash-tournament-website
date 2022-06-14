const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("auth-token");
  if (token)
    try {
      const verified = jwt.verify(token, process.env.API_JWT_SECRET);
      req.user = verified;
      next();
    } catch (err) {
      req.user = "";
      next();
    }
};
