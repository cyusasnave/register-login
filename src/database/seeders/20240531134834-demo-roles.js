/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      "Roles",
      [
        {
          id: "df45a304-9357-4238-82ea-000c02e63295",
          name: "GUEST",
          description:
            "User can view all hitlists but can't add movies to hitlist",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "390a35c4-6d11-481b-a631-4f9a81e25f49",
          name: "CREATOR",
          description: "User can view all hitlists and add movies to hitlist",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "9e249a6e-9798-427e-bf9a-20a89260ff24",
          name: "ADMIN",
          description: "User has access to all application",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("People", null, {})
  },
}
