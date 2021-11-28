"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          id: 10,
          name: "ACDC Man",
          mainImg:
            "https://cdn.shopify.com/s/files/1/0554/7317/files/mens_moto_251x313.jpg?v=1634703941",
          createdAt: "2021-11-28T04:02:46.451Z",
          updatedAt: "2021-11-28T04:02:46.451Z",
        },
        {
          id: 11,
          name: "ACDC Woman",
          mainImg:
            "https://cdn.shopify.com/s/files/1/0554/7317/files/womens_coverall_251x313.jpg?v=1634778820",
          createdAt: "2021-11-28T04:03:08.206Z",
          updatedAt: "2021-11-28T04:03:08.206Z",
        },
        {
          id: 12,
          name: "ACDC Classic",
          mainImg:
            "https://cdn.shopify.com/s/files/1/0554/7317/files/classics_restock_251x313.jpg?v=1634703941",
          createdAt: "2021-11-28T04:04:47.311Z",
          updatedAt: "2021-11-28T04:04:47.311Z",
        },
        {
          id: 13,
          name: "Kids",
          mainImg:
            "https://ae01.alicdn.com/kf/H434f1d467213400196bbb85d78bca03b9/Summer-Girl-Baby-Tops-Cute-Unicorn-Print-Aesthetic-Clothes-Short-Sleeve-Streetwear-Toddler-Tees-Oversize-Kids.jpg_Q90.jpg_.webp",
          createdAt: "2021-11-28T04:06:25.168Z",
          updatedAt: "2021-11-28T04:06:25.168Z",
        },
        {
          id: 14,
          name: "Accessories",
          mainImg:
            "https://cdn.shopify.com/s/files/1/0554/7317/files/592A1192_37b67b9e-8c93-4b2a-8991-31539a96d935_251x313.jpg?v=1636351449",
          createdAt: "2021-11-28T04:06:54.284Z",
          updatedAt: "2021-11-28T04:06:54.284Z",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
