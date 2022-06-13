"use strict";

const bcrypt = require("bcrypt");
const uuid = require("uuid");

const encrypt = (password) => bcrypt.hashSync(password, 10);

const firstUserId = uuid.v4()
const secondUserId = uuid.v4()
const firstTournamentId = uuid.v4()
const secondTournamentId = uuid.v4()
const firstParticipationId = uuid.v4()
const secondParticipationId = uuid.v4()

module.exports = {
  


  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: firstUserId,
          email: "marcinkrueger@onet.eu",
          password: encrypt("123"),
          name: "Marcin",
          surname: "Krueger",
          born_date: new Date(),
          is_active: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: secondUserId,
          email: "testmail@gmail.com",
          password: encrypt("345"),
          name: "Mariusz",
          surname: "Pudzianowski",
          born_date: new Date(),
          is_active: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "tournaments",
      [
        {
          id: firstTournamentId,
          name: "Mistrzostwa Polski",
          min_age: 16,
          max_age: 50,
          date: new Date(),
          place_x: "52.409538",
          place_y: "16.931992",
          max_participants: 16,
          deadline_date: new Date(),
          price: 200,
          image: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: secondTournamentId,
          name: "Turniej Junikowa",
          min_age: 26,
          max_age: 56,
          date: new Date(),
          place_x: "52.409538",
          place_y: "16.931992",
          max_participants: 8,
          deadline_date: new Date(),
          price: 200,
          image: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "participations",
      [
        {
          id: firstParticipationId,
          tournament_id: firstTournamentId,
          user_id: firstUserId,
          is_organizer: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: secondParticipationId,
          tournament_id: firstTournamentId,
          user_id: secondUserId,
          is_organizer: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "matches",
      [
        {
          id: uuid.v4(),
          participation_first_id: firstParticipationId,
          score_participation_first: 11,
          participation_second_id: secondParticipationId,
          score_participation_second: 5,
          next_match: null,
          status: "DONE",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("matches", null, {});
    await queryInterface.bulkDelete("participations", null, {});
    await queryInterface.bulkDelete("users", null, {});
    await queryInterface.bulkDelete("tournaments", null, {});
  },
};
