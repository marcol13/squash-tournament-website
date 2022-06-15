const express = require("express");
const { Tournament, Participation } = require("../models");
const { Op } = require("sequelize");

const router = express.Router();

router.get("/past_tournaments", async (req, res) => {
  let tournaments = await Tournament.findAll({
    limit: 5,
    order: [["date", "DESC"]],
    where: { date: { [Op.lte]: new Date() } },
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

  if (!tournaments) {
    res.json({ status: 404, error: "No data available" });
  }

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
