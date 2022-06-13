const express = require("express");
const { User } = require("../models");

const router = express.Router();

router.post("/register", async (req, res) => {
  console.log(req.body);

  const { email, password, name, surname, born_date } = req.body;

  const alreadyExistsUser = await User.findOne({ where: { email } }).catch(
    (err) => console.log("Error: ", err)
  );

  if (alreadyExistsUser) {
    return res.json({ message: "User with that email already exists!" });
  }

  const newUser = new User({
    email,
    password,
    name,
    surname,
    born_date: new Date(),
    is_active: false,
    created_at: new Date(),
    updated_at: new Date(),
  });
  const savedUser = await newUser.save().catch((err) => {
    console.log("Error: ", err);
    res.json({ error: "Cannot register user as the moment!" });
  });

  if (savedUser) {
    res.json({ message: "Thanks for registering" });
  }
});

module.exports = router;
