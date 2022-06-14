const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(401).json({ messsage: "Access Denied" });

  try {
    const verified = jwt.verify(token, process.env.API_JWT_SECRET);
    req.user = verified;
    next()
  } catch (err) {
    res.status(400).json({ message: "Invalid token" });
  }
}
