const express = require("express");
const registerApi = require("./register");
const activateApi = require("./activate");
const loginApi = require("./login");
const addTournamentApi = require("./addTournament");
const resetPassword = require("./resetPassword")
const activatePasswordChange = require("./activatePasswordChange")
const tournamentApi = require("./tournament")
const participationApi = require("./participation")
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
router.use(resetPassword);
router.use(activatePasswordChange);
router.use(tournamentApi);
router.use(participationApi);
// router.use(paymentApi);

module.exports = router;
