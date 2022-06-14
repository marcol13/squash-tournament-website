const express = require("express");
const uuid = require("uuid");
const { Tournament, Participation, Sponsor } = require("../models");
const verify = require("./verify");

const router = express.Router();

router.post("/add_tournament", verify, async (req, res) => {
  const {
    name,
    min_age,
    max_age,
    date,
    max_participants,
    deadline_date,
    price,
    sponsors,
    image,
    place_x,
    place_y,
  } = req.body;

  const tournamentId = uuid.v4();

  const newTournament = new Tournament({
    id: tournamentId,
    name,
    min_age,
    max_age,
    date,
    max_participants,
    deadline_date,
    price,
    image,
    place_x,
    place_y,
    created_at: new Date(),
    updated_at: new Date(),
  });

  const savedTournament = await newTournament.save().catch((err) => {
    console.log("Error: ", err);
    res.json({
      status: 500,
      error: "Cannot register tournament at the moment!",
    });
  });

  if (savedTournament) {
    console.log(req.user.id);
    const newParticipation = new Participation({
      user_id: req.user.id,
      tournament_id: tournamentId,
      is_organizer: true,
      created_at: new Date(),
      updated_at: new Date(),
    });

    const savedParticipation = await newParticipation.save().catch((err) => {
      res.json({
        status: 500,
        error: "Cannot register tournament at the moment!",
      });
    });

    console.log(sponsors.length);
    for (let el of sponsors) {
      const newSponsor = new Sponsor({
        tournament_id: tournamentId,
        image: el,
      });

      await newSponsor.save().catch((err) => {
        return res.json({
          status: 500,
          error: "Cannor register sponsor logo!",
        });
      });
    }

    if (savedParticipation)
      res.json({ status: 200, message: "Thanks for tournament registering" });
  }
});

module.exports = router;
