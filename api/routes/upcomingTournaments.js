const express = require("express");
const { Tournament, Participation } = require("../models");
const { Op } = require("sequelize");
const verify = require("./verify");

const router = express.Router();

router.get("/upcoming_tournaments", verify, async (req, res) => {
  const participations = await Participation.findAll({
    where: { user_id: req.user.id },
  });

  let tournaments = [];

  for (let i of participations) {
    const temp = await Tournament.findOne({
      where: { date: { [Op.gte]: new Date() }, id: i.tournament_id },
      attributes: [
        "id",
        "name",
        "date",
        "min_age",
        "max_age",
        "max_participants",
        "price",
        "image",
      ],
    });
    if (temp) {
      tournaments.push(temp);
    }
  }

  if (!tournaments) {
    res.json({ status: 404, error: "No data available" });
  }
  //   console.log(tournaments);

  for (let i = 0; i < tournaments.length; i++) {
    const countParticipation = await Participation.count({
      where: { tournament_id: tournaments[i].id, is_organizer: false },
    });
    tournaments[i]["dataValues"]["count"] = countParticipation;
    if (tournaments[i]["dataValues"]["image"] != null)
      tournaments[i]["dataValues"]["image"] =
        tournaments[i]["dataValues"]["image"].toString();
  }

  res.json({
    status: 200,
    message: "You fetch tournament data",
    tournaments,
  });
});

module.exports = router;
