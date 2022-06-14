const express = require("express");
const nodemailer = require("nodemailer");
const uuid = require("uuid")
const { User } = require("../models");

const router = express.Router();

router.post("/register", async (req, res) => {
  console.log(req.body);

  const { email, password, name, surname, born_date } = req.body;

  const alreadyExistsUser = await User.findOne({ where: { email } }).catch(
    (err) => console.log("Error: ", err)
  );

  if (alreadyExistsUser) {
    return res.json({ status: 409, error: "User with that email already exists!" });
  }

  const userId = uuid.v4()

  const newUser = new User({
    id: userId,
    email,
    password,
    name,
    surname,
    born_date: born_date,
    is_active: false,
    created_at: new Date(),
    updated_at: new Date(),
  });
  const savedUser = await newUser.save().catch((err) => {
    console.log("Error: ", err);
    res.json({ status: 500, error: "Cannot register user as the moment!" });
  });

  if (savedUser) {
    res.json({ status: 200, message: "Thanks for registering" });
    sendMail(name, userId)
  }
});

async function sendMail(name, id) {
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
    subject: "Squash tournament generator - aktywacja konta", // Subject line
    text: `Link do aktywacji konta: http://localhost:5050/api/v1/activate/${id}`, // plain text body
    html: `<b>Cześć ${name}!</b><br><span><a href="http://localhost:5000/api/v1/activate/${id}">Link aktywacyjny</a></span>`, // html body
  });
}

module.exports = router;
