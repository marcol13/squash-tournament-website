const express = require("express");
const registerApi = require("./register");
const activateApi = require("./activate");
const loginApi = require("./login");
const addTournamentApi = require("./addTournament");
// const paymentApi = require("./payment");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API :)",
  });
});

router.use(registerApi);
router.use(activateApi);
router.use(loginApi);
router.use(addTournamentApi);
// router.use(paymentApi);

module.exports = router;
