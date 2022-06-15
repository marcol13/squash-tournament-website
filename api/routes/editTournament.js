const express = require("express");
const uuid = require("uuid");
const { Tournament } = require("../models");
const verify = require("./verify");

const router = express.Router();

router.put("/edit_tournament", verify, async (req, res) => {
  const { id, name, min_age, max_age, date, deadline_date, price } = req.body;

  console.log({ id });

  const updated = await Tournament.update(
    { name, min_age, max_age, date, deadline_date, price },
    { where: { id } }
  ).catch((err) => {
    res.json({ status: 400, message: "Cannot update data" });
  });

  res.json({ status: 200, message: "Updated successfully" });

  //   const newTournament = new Tournament({
  //     id: tournamentId,
  //     name,
  //     min_age,
  //     max_age,
  //     date,
  //     max_participants,
  //     deadline_date,
  //     price,
  //     image: imageTournament,
  //     place_x,
  //     place_y,
  //     created_at: new Date(),
  //     updated_at: new Date(),
  //   });

  //   const savedTournament = await newTournament.save().catch((err) => {
  //     console.log("Error: ", err);
  //     res.json({
  //       status: 500,
  //       error: "Cannot register tournament at the moment!",
  //     });
  //   });
});

module.exports = router;
