"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Images",
      [
        {
          id: 7,
          ProductId: 24,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/Naito-Box-Tee-Front-Blue_400x.jpg?v=1634798283",
          createdAt: "2021-11-28T04:09:51.009Z",
          updatedAt: "2021-11-28T04:09:51.009Z",
        },
        {
          id: 6,
          ProductId: 24,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/DMF201665.NaitoBoxTee.EnsignBlue.OnBody.2_400x.jpg?v=1634025188",
          createdAt: "2021-11-28T04:09:51.009Z",
          updatedAt: "2021-11-28T04:09:51.009Z",
        },
        {
          id: 8,
          ProductId: 24,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/Naito-Box-Tee-Back-Blue_400x.jpg?v=1634798283",
          createdAt: "2021-11-28T04:09:51.009Z",
          updatedAt: "2021-11-28T04:09:51.009Z",
        },
        {
          id: 21,
          ProductId: 29,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/back_260ac458-88b7-4593-9d0f-f27d6930fb42_400x.jpg?v=1624328814",
          createdAt: "2021-11-28T04:15:15.957Z",
          updatedAt: "2021-11-28T04:15:15.957Z",
        },
        {
          id: 22,
          ProductId: 30,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/DMF201666C.NaitoCangguTee.VintageWhite.3_6eba859f-0363-472f-8168-ae304047b453_400x_1_400x.jpg?v=1637131108",
          createdAt: "2021-11-28T04:16:49.541Z",
          updatedAt: "2021-11-28T04:16:49.541Z",
        },
        {
          id: 23,
          ProductId: 30,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/DMF201666G.NaitoBiarritzTee.VintageWhite.2_6d5c3519-f000-445c-b274-00b2d6ddd317_400x_1_400x.jpg?v=1637131108",
          createdAt: "2021-11-28T04:16:49.541Z",
          updatedAt: "2021-11-28T04:16:49.541Z",
        },
        {
          id: 24,
          ProductId: 30,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/Front_2_400x.jpg?v=1634803782",
          createdAt: "2021-11-28T04:16:49.541Z",
          updatedAt: "2021-11-28T04:16:49.541Z",
        },
        {
          id: 25,
          ProductId: 31,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/Back_6_400x.jpg?v=1634274169",
          createdAt: "2021-11-28T04:17:41.607Z",
          updatedAt: "2021-11-28T04:17:41.607Z",
        },
        {
          id: 26,
          ProductId: 32,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/DMP2051151B.NaitoButterShirt.Multi.OnBody.2_400x.jpg?v=1634026788",
          createdAt: "2021-11-28T04:18:53.538Z",
          updatedAt: "2021-11-28T04:18:53.538Z",
        },
        {
          id: 27,
          ProductId: 32,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/DMP2051151B.NaitoButterShirt.Multi.OnBody.3_400x.jpg?v=1634026789",
          createdAt: "2021-11-28T04:18:53.538Z",
          updatedAt: "2021-11-28T04:18:53.538Z",
        },
        {
          id: 28,
          ProductId: 32,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/Naito-Butter-Multi-Front_400x.jpg?v=1634798373",
          createdAt: "2021-11-28T04:18:53.539Z",
          updatedAt: "2021-11-28T04:18:53.539Z",
        },
        {
          id: 29,
          ProductId: 33,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/studio3_1080x1080_0bc9879e-7804-4a2a-8296-fd9dc615f593_400x.jpg?v=1620007008",
          createdAt: "2021-11-28T04:20:10.588Z",
          updatedAt: "2021-11-28T04:20:10.588Z",
        },
        {
          id: 30,
          ProductId: 33,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/W_DIGI_SQ_56_1080x1080_ebf55486-7f83-40d5-892e-237ed8d3ba70_400x.jpg?v=1620007008",
          createdAt: "2021-11-28T04:20:10.589Z",
          updatedAt: "2021-11-28T04:20:10.589Z",
        },
        {
          id: 31,
          ProductId: 34,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/3.FRONT_400x.jpg?v=1569409745",
          createdAt: "2021-11-28T04:21:02.911Z",
          updatedAt: "2021-11-28T04:21:02.911Z",
        },
        {
          id: 32,
          ProductId: 35,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/Women-Address-Tank-White-Back_400x.jpg?v=1603684319",
          createdAt: "2021-11-28T04:26:17.361Z",
          updatedAt: "2021-11-28T04:26:17.361Z",
        },
        {
          id: 33,
          ProductId: 36,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/Women-Address-White-Back_400x.jpg?v=1603682627",
          createdAt: "2021-11-28T04:27:05.748Z",
          updatedAt: "2021-11-28T04:27:05.748Z",
        },
        {
          id: 34,
          ProductId: 37,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/W_DIGI_SQ_139_1080x1080_db50d33e-45ba-4505-8767-d01e11912897_400x.jpg?v=1624334112",
          createdAt: "2021-11-28T04:28:28.593Z",
          updatedAt: "2021-11-28T04:28:28.593Z",
        },
        {
          id: 35,
          ProductId: 38,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/front_91f3b6a7-4ece-481d-99e4-15a99af60340_400x.jpg?v=1624329829",
          createdAt: "2021-11-28T04:29:19.972Z",
          updatedAt: "2021-11-28T04:29:19.972Z",
        },
        {
          id: 36,
          ProductId: 39,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/2.BACK_6b81e0eb-cc2f-4cf5-b584-c727f100ce34_400x.jpg?v=1574223236",
          createdAt: "2021-11-28T04:30:16.327Z",
          updatedAt: "2021-11-28T04:30:16.327Z",
        },
        {
          id: 37,
          ProductId: 40,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/back_974d6316-7283-4fde-a5ae-658316d99968_400x.jpg?v=1624328381",
          createdAt: "2021-11-28T04:32:32.854Z",
          updatedAt: "2021-11-28T04:32:32.854Z",
        },
        {
          id: 38,
          ProductId: 40,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/KIDBUFFALO_400x.jpg?v=1633315810",
          createdAt: "2021-11-28T04:32:32.854Z",
          updatedAt: "2021-11-28T04:32:32.854Z",
        },
        {
          id: 39,
          ProductId: 41,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/KidsNewCangguTeeFront_400x.jpg?v=1631596754",
          createdAt: "2021-11-28T04:33:35.114Z",
          updatedAt: "2021-11-28T04:33:35.114Z",
        },
        {
          id: 40,
          ProductId: 41,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/kidsnewcanggutee_400x.jpg?v=1633399920",
          createdAt: "2021-11-28T04:33:35.114Z",
          updatedAt: "2021-11-28T04:33:35.114Z",
        },
        {
          id: 41,
          ProductId: 42,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/Address-Bali-White-Back_400x.jpg?v=1603436093",
          createdAt: "2021-11-28T04:34:25.582Z",
          updatedAt: "2021-11-28T04:34:25.582Z",
        },
        {
          id: 42,
          ProductId: 42,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/addressbalinf_400x.jpg?v=1633397457",
          createdAt: "2021-11-28T04:34:25.583Z",
          updatedAt: "2021-11-28T04:34:25.583Z",
        },
        {
          id: 43,
          ProductId: 43,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/G50-Back_400x.jpg?v=1603346598",
          createdAt: "2021-11-28T04:35:30.704Z",
          updatedAt: "2021-11-28T04:35:30.704Z",
        },
        {
          id: 44,
          ProductId: 43,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/g50_f6ba4220-2a9a-4f7e-b8ad-c05dabcdd777_400x.jpg?v=1633398238",
          createdAt: "2021-11-28T04:35:30.704Z",
          updatedAt: "2021-11-28T04:35:30.704Z",
        },
        {
          id: 45,
          ProductId: 44,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/DXM-Back_400x.jpg?v=1603346589",
          createdAt: "2021-11-28T04:36:13.975Z",
          updatedAt: "2021-11-28T04:36:13.975Z",
        },
        {
          id: 46,
          ProductId: 44,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/D.X.M_400x.jpg?v=1633398707",
          createdAt: "2021-11-28T04:36:13.975Z",
          updatedAt: "2021-11-28T04:36:13.975Z",
        },
        {
          id: 47,
          ProductId: 45,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/2_dc28ce41-b5f9-4f18-9e7c-fa9365ca4875_400x.jpg?v=1570774750",
          createdAt: "2021-11-28T04:39:08.534Z",
          updatedAt: "2021-11-28T04:39:08.534Z",
        },
        {
          id: 48,
          ProductId: 45,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/3_3b0dbe75-4b2d-435d-a8ca-c294fbadce1a_400x.jpg?v=1570774750",
          createdAt: "2021-11-28T04:39:08.538Z",
          updatedAt: "2021-11-28T04:39:08.538Z",
        },
        {
          id: 49,
          ProductId: 45,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/4_93aa5b8c-c045-4863-8304-547bd13fc3a3_400x.jpg?v=1570774750",
          createdAt: "2021-11-28T04:39:08.538Z",
          updatedAt: "2021-11-28T04:39:08.538Z",
        },
        {
          id: 50,
          ProductId: 46,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/15.front_75c74baf-4f53-425a-ad70-c71a4d15cea2_400x.jpg?v=1572331350",
          createdAt: "2021-11-28T04:40:00.903Z",
          updatedAt: "2021-11-28T04:40:00.903Z",
        },
        {
          id: 51,
          ProductId: 46,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/14.BACK_a1b9db05-de6e-4f11-8119-a07923c7ba94_400x.jpg?v=1572331365",
          createdAt: "2021-11-28T04:40:00.903Z",
          updatedAt: "2021-11-28T04:40:00.903Z",
        },
        {
          id: 52,
          ProductId: 46,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/14.DETAIL_400x.jpg?v=1572331365",
          createdAt: "2021-11-28T04:40:00.904Z",
          updatedAt: "2021-11-28T04:40:00.904Z",
        },
        {
          id: 53,
          ProductId: 47,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/15.front_75c74baf-4f53-425a-ad70-c71a4d15cea2_400x.jpg?v=1572331350",
          createdAt: "2021-11-28T04:41:11.167Z",
          updatedAt: "2021-11-28T04:41:11.167Z",
        },
        {
          id: 54,
          ProductId: 47,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/14.BACK_a1b9db05-de6e-4f11-8119-a07923c7ba94_400x.jpg?v=1572331365",
          createdAt: "2021-11-28T04:41:11.167Z",
          updatedAt: "2021-11-28T04:41:11.167Z",
        },
        {
          id: 55,
          ProductId: 47,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/14.DETAIL_400x.jpg?v=1572331365",
          createdAt: "2021-11-28T04:41:11.167Z",
          updatedAt: "2021-11-28T04:41:11.167Z",
        },
        {
          id: 56,
          ProductId: 48,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/592A1181_400x.jpg?v=1620939402",
          createdAt: "2021-11-28T04:42:05.078Z",
          updatedAt: "2021-11-28T04:42:05.078Z",
        },
        {
          id: 57,
          ProductId: 48,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/DMS2071077.TransitSlingBag.Tan.2_400x.jpg?v=1619230270",
          createdAt: "2021-11-28T04:42:05.078Z",
          updatedAt: "2021-11-28T04:42:05.078Z",
        },
        {
          id: 58,
          ProductId: 48,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/DMS2071077.TransitSlingBag.Tan.4_400x.jpg?v=1619230271",
          createdAt: "2021-11-28T04:42:05.078Z",
          updatedAt: "2021-11-28T04:42:05.078Z",
        },
        {
          id: 59,
          ProductId: 49,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/SheildStandardCap2_400x.jpg?v=1621227203",
          createdAt: "2021-11-28T04:43:04.372Z",
          updatedAt: "2021-11-28T04:43:04.372Z",
        },
        {
          id: 60,
          ProductId: 50,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/DMF206837.NaitoChoreJacket.EnsignBlue.OnBody.2_400x.jpg?v=1634023337",
          createdAt: "2021-11-28T04:44:37.954Z",
          updatedAt: "2021-11-28T04:44:37.954Z",
        },
        {
          id: 61,
          ProductId: 50,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/DMF206837.NaitoChoreJacket.EnsignBlue.3_400x.jpg?v=1634023338",
          createdAt: "2021-11-28T04:44:37.955Z",
          updatedAt: "2021-11-28T04:44:37.955Z",
        },
        {
          id: 62,
          ProductId: 50,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/DMF206837.NaitoChoreJacket.EnsignBlue.4_400x.jpg?v=1634023338",
          createdAt: "2021-11-28T04:44:37.955Z",
          updatedAt: "2021-11-28T04:44:37.955Z",
        },
        {
          id: 63,
          ProductId: 50,
          imgUrl:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/Naito-Chore-Blue-Back_400x.jpg?v=1634798582",
          createdAt: "2021-11-28T04:44:37.955Z",
          updatedAt: "2021-11-28T04:44:37.955Z",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Images", null, {});
  },
};
