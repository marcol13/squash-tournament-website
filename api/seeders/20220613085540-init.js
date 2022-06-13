'use strict';

const bcrypt = require('bcrypt');

const encrypt = (password) =>  bcrypt.hashSync(password, 10);

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
         id: 1,
         email: "marcinkrueger@onet.eu",
         password: encrypt("123"),
         name: "Marcin",
         surname: "Krueger",
         born_date: new Date(),
         is_active: false,
         created_at: new Date(),
         updated_at: new Date()
       },
      {
        id: 2,
         email: "testmail@gmail.com",
         password: encrypt("345"),
         name: "Mariusz",
         surname: "Pudzianowski",
         born_date: new Date(),
         is_active: true,
         created_at: new Date(),
         updated_at: new Date()
      }], {});

      await queryInterface.bulkInsert('tournaments', [{
        id: 1,
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
        updated_at: new Date()
      },
     {
       id: 2,
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
       updated_at: new Date()
     }], {});

     await queryInterface.bulkInsert('participations', [{
      id: 1,
      tournament_id: 1,
      user_id: 1,
      is_organizer: true,      
      created_at: new Date(),
      updated_at: new Date()
    },
   {
     id: 2,
     tournament_id: 1,
     user_id: 2,
     is_organizer: false,      
     created_at: new Date(),
     updated_at: new Date()
   }], {});

   await queryInterface.bulkInsert('matches', [{
    id: 1,
    participation_first_id: 1,
    score_participation_first: 11,
    participation_second_id: 2,
    score_participation_second: 5,
    next_match: null,
    status: "DONE",
    created_at: new Date(),
    updated_at: new Date()
  }], {});

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('matches', null, {});
    await queryInterface.bulkDelete('participations', null, {});
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkDelete('tournaments', null, {});

  }
};
