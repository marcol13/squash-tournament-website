const jwt = require("jsonwebtoken");

function verify(req, res, next) {
  const token = req.header("auth-token");
  if (!token) return req.status(401).json({ messsage: "Access Denied" });

  try {
    const verified = jwt.verify(token, process.env.API_JWT_SECRET);
    req.user = verified;
  } catch (err) {
    res.status(400).json({ message: "Invalid token" });
  }
}
