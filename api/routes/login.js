const express = require("express");
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")

const router = express.Router();

const encrypt = (password) => bcrypt.hashSync(password, 10);

router.post("/login", async (req, res) => {


  const { email, password } = await req.body;

  console.log({email, password})

  const userWithEmail = await User.findOne({ where: { email } }).catch(
    (err) => {
      console.log("Error: ", err);
    }
  );

  if (!userWithEmail) {
    return res.json({
      status: 404,
      error: "Email or password does not match!",
    });
  }

  const isValidPassword = await userWithEmail.validPassword(password)

  if (!isValidPassword) {
    return res.json({
      status: 404,
      error: "Email or password does not match!",
    });
  }

  const jwtToken = jwt.sign({
    id: userWithEmail.id,
    email: userWithEmail.email,
  }, process.env.API_JWT_SECRET);

  // const refreshToken = jwt.sign({
  //   id: userWithEmail.id,
  //   email: userWithEmail.email,
  // }, process.env.API_JWT_REFRESH_SECRET)

  res.json({status: 200, message: "Welcome back!", token: jwtToken, name: userWithEmail.name})
});

module.exports = router;
