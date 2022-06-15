const express = require("express");
const { Tournament, Participation } = require("../models");
const { Op } = require("sequelize");

const router = express.Router();

router.get("/next_tournaments/:tenths", async (req, res) => {
  let tournaments = await Tournament.findAll({
    offset: req.params.tenths * 10,
    limit: 10,
    order: [["date", "ASC"]],
    where: { date: { [Op.gte]: new Date() } },
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

  const all = await Tournament.count({ where: { date: { [Op.gte]: new Date() } } });

  res.json({
    status: 200,
    message: "You fetch tournament data",
    tournaments,
    all: all,
  });
});

module.exports = router;
