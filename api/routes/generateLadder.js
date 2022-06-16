const express = require("express");
const { Participation, User, Match } = require("../models");
const uuid = require("uuid");
const user = require("../models/user");
const verify = require("./verify");
// const { Model } = require("sequelize/types");

const router = express.Router();

const neededPlayers = (amount) => {
  if (amount == 0) return 0;
  let result = 1;
  while (result < amount) {
    result = result << 1;
  }
  return result;
};

let match_id = [];

const generateMatch = (index) => {
    const id = uuid.v4()
    match_id.push(id)
  return {
    id: id,
    name:
      index == 0
        ? "Finał"
        : index >= 1 && index <= 2
        ? "Półfinał"
        : index >= 3 && index <= 6
        ? "Ćwierćfinał"
        : "",
    nextMatchId: index == 0 ? null : match_id[Math.floor((index + 1) / 2) - 1],
    tournamentRoundText: "4",
    startTime: "",
    state: "DONE",
    participants: [
      {
        id: "",
        resultText: "",
        isWinner: false,
        status: null,
        name: "",
      },
      {
        id: "",
        resultText: "",
        isWinner: false,
        status: null,
        name: "",
      },
    ],
  };
};

router.post("/generate_ladder", verify, async (req, res) => {
  const { tournament_id } = req.body;

  const amount = await Participation.count({
    where: { tournament_id, is_organizer: false },
  });

  if (amount == 0) {
    return res.json({ status: 400, error: "0 players" });
  }

  const participations = await Participation.findAll({
    where: { tournament_id, is_organizer: false },
  });

  console.log(amount);
  const needed = neededPlayers(amount);
  const players = new Array(needed).fill(null);
  let matches = new Array(needed - 1).fill(null);

  for (let i of participations) {
    let rand = Math.floor(Math.random() * needed);
    while (players[rand] != null) {
      rand = Math.floor(Math.random() * needed);
    }
    players[rand] = i.user_id;
  }

  matches = matches.map((_, index) => {
    return generateMatch(index);
  });

  for (let i = 0; i < needed / 2; i++) {
    matches[matches.length - 1 - i].participants[0].id = players[i * 2];
    matches[matches.length - 1 - i].participants[1].id = players[i * 2 + 1];
    let firstNick = "";
    let secondNick = "";
    if (players[i * 2] != null)
      firstNick = await User.findOne(
        { where: { id: players[i * 2] } },
        { attributes: ["id", "name", "surname"] }
      );

    console.log({ firstNick });

    if (players[i * 2 + 1] != null)
      secondNick = await User.findOne(
        { where: { id: players[i * 2 + 1] } },
        { attributes: ["name", "surname"] }
      );

    console.log({ secondNick });
    matches[matches.length - 1 - i].participants[0].name = `${
      firstNick.name ?? ""
    } ${firstNick.surname ?? ""}`;
    matches[matches.length - 1 - i].participants[1].name = `${
      secondNick.name ?? ""
    } ${secondNick.surname ?? ""}`;
  }

  // for(let i = 0; i < matches.length; i++){
  //     const participationFirstId = await Participation.findOne({where: {user_id: matches[i].participants[0].id, tournament_id}})
      
  //     const newModel = new Match({id: match_id[i], score_participation_first: 0, score_participation_second: 0, next_match: matches[i].nextMatchId, status: "DONE", created_at: new Date(), updated_ate: new Date()})
  // }

  //   console.log(matches[2].participants);
  match_id = []

  res.json({ status: 200, message: "Ladder generate correctly", matches });
});

module.exports = router;
