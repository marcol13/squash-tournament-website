const express = require("express");
const registerApi = require("./register");
const activateApi = require("./activate");
const loginApi = require("./login");
const addTournamentApi = require("./addTournament");
const resetPassword = require("./resetPassword")
const activatePasswordChange = require("./activatePasswordChange")
const tournamentApi = require("./tournament")
const participationApi = require("./participation")
const nextTournamentsApi = require("./nextTournaments")
const pastTournamentsApi = require("./pastTournaments")
const historyTournamentsApi = require("./historyTournaments")
const upcomingTournamentsApi = require("./upcomingTournaments")
const editTournamentsApi = require("./editTournament")
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
router.use(nextTournamentsApi);
router.use(pastTournamentsApi);
router.use(historyTournamentsApi);
router.use(upcomingTournamentsApi);
router.use(editTournamentsApi);
// router.use(paymentApi);

module.exports = router;
