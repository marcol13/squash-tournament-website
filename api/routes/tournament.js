const express = require("express");
const { Tournament, Participation, User } = require("../models");
const checkUser = require("./checkUser");

const router = express.Router();

function calculateYears(date) {
  var ageDifMs = Date.now() - date;
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

router.get("/tournament/:tournamentId", checkUser, async (req, res) => {
  const isExistingTournament = await Tournament.findOne({
    where: { id: req.params.tournamentId },
  }).catch((err) => {
    console.log("error");
  });

  if (!isExistingTournament) {
    return res.json({ status: 404, error: "There is no such tournament" });
  }

  const countParticipation = await Participation.count({
    where: { tournament_id: req.params.tournamentId, is_organizer: false },
  });
  let canRegister = true;
  let isOrganizer = false;

  if (req.user == "") {
    console.log("you are not logged");
    canRegister = false;
  } else {
    //If deadline date let you register
    if (new Date(isExistingTournament.deadline_date) > new Date()) {
      const isAlreadyRegistered = await Participation.findOne({
        where: {
          tournament_id: req.params.tournamentId,
          user_id: req.user.id,
        },
      });
      //If you are already registered
      if (isAlreadyRegistered) {
        canRegister = false;
        //If you are organizer
        if (isAlreadyRegistered.is_organizer) {
          isOrganizer = true;
        }
        //If there are no spots in tournament
      } else if (countParticipation >= isExistingTournament.max_participants) {
        canRegister = false;
      } else {
        const user = await User.findOne({ where: { id: req.user.id } });

        const age = calculateYears(user.born_date);
        //If you are not in age range
        if (
          age < isExistingTournament.min_age ||
          age > isExistingTournament.max_age
        ) {
          canRegister = false;
          //If you are not active
        } else if (!user.is_active) {
          canRegister = false;
        }
      }
    }else{
      canRegister = false;
    }
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
    count: countParticipation,
    canRegister,
    isOrganizer,
  });

  //   await User.update({ is_active: true }, { where: { id: req.params.userId } })
  //     .then(res.redirect("http://localhost:3000/login"))
  //     .catch((err) => {
  //       res.json({ message: "Cannot activate account" });
  //     });
});

module.exports = router;
