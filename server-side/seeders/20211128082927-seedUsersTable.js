"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "raihan",
          email: "raihanrobbani123@gmail.com",
          password:
            "$2a$10$zVxUyFlee18P6Qyab/efL.ZrnpgF6YXpvyleY5UIC8I0U8ay7UmXW",
          role: "Admin",
          phoneNumber: "085156054979",
          address: "Bogor",
          createdAt: "2021-11-26T03:32:53.905Z",
          updatedAt: "2021-11-26T03:32:53.905Z",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
