const express = require("express");
const { Tournament } = require("../models");

const router = express.Router();

router.get("/tournament/:tournamentId", async (req, res) => {
  const isExistingTournament = await Tournament.findOne({
    where: { id: req.params.tournamentId },
  }).catch(err => {
    console.log("error")
  })

  if (!isExistingTournament) {
    return res.json({ status: 404, error: "There is no such tournament" });
  }

  const {
    name,
    min_age,
    max_age,
    max_participants,
    date,
    deadline_date,
    place_x,
    place_y,
  } = isExistingTournament;

  res.json({
    status: 200,
    name,
    minAge: min_age,
    maxAge: max_age,
    maxParticipants: max_participants,
    date,
    deadlineDate: deadline_date,
    placeX: place_x,
    placeY: place_y,
  });

  //   await User.update({ is_active: true }, { where: { id: req.params.userId } })
  //     .then(res.redirect("http://localhost:3000/login"))
  //     .catch((err) => {
  //       res.json({ message: "Cannot activate account" });
  //     });
});

module.exports = router;
