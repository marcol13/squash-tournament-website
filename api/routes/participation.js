const express = require("express");
const { Participation } = require("../models");
const verify = require("./verify");

const router = express.Router();

router.post("/participation", verify, async (req, res) => {
  const { tournament_id } = req.body;

  const newParticipation = new Participation({
    tournament_id,
    user_id: req.user.id,
  });

  const savedParticipation = await newParticipation.save().catch((err) => {
    console.log("Error: ", err);
    res.json({
      status: 500,
      error: "Cannot register participation at the moment!",
    });
  });

  if (savedParticipation){
      res.json({status: 200, message: "Your participation has been added!"});
  }
});

module.exports = router;
