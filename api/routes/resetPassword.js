const express = require("express");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const nodemailer = require("nodemailer");
const { User } = require("../models");
const verify = require("./verify");

async function generateHash(password){
    const salt = await bcrypt.genSaltSync(10, "a");
    return bcrypt.hashSync(password, salt);
  }

const router = express.Router();

router.post("/reset_password", async (req, res) => {
  const { email, password } = req.body;

  const isExistingUser = await User.findOne({ where: { email } });

  if (!isExistingUser) {
    return res.json({ status: 404, error: "There is no such user!" });
  }

  const hashedPass = await generateHash(password)
  
  sendMail(isExistingUser.id, hashedPass, email)
  res.json({status: 200, message: "Created change password request"})
});

async function sendMail(id, pass, email) {
  let transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: process.env.API_MAIL, // generated ethereal user
      pass: process.env.API_MAIL_PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: '"Michał Paletka 🎾" <squash-tournament-generator@outlook.com>', // sender address
    to: "marcinkrueger@onet.eu", // list of receivers
    subject: "Squash tournament generator - reset hasła", // Subject line
    text: `Link do aktywacji konta: http://localhost:5000/api/v1/activate_password_change/${id}/${pass}`, // plain text body
    html: `<b>Zresetowałeś ostatnio hasło!</b><br><span><a href="http://localhost:5000/api/v1/activate_password_change/${id}/${pass}">Link aktywacyjny zmiany hasła</a></span>`, // html body
  });
}

module.exports = router;
