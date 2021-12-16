"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          id: 35,
          name: "WOMEN ADDRESS TANK WHITE",
          slug: "WOMEN-ADDRESS-TANK-WHITE",
          description:
            "Standar fit 50'S Cotton Rayon Slub (Poli 70% Cotton 30%) dengan Logo Deus Shield di Depan dan di dalam print klasik alamat Canggu.",
          price: 259000,
          mainImg:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/Women-Address-Tank-White-Front_400x.jpg?v=1603684320",
          CategoryId: 11,
          AuthorId: 1,
          createdAt: "2021-11-28T04:26:17.326Z",
          updatedAt: "2021-11-28T04:26:17.326Z",
        },
        {
          id: 36,
          name: "WOMEN ADDRESS BALI WHITE",
          slug: "WOMEN-ADDRESS-BALI-WHITE",
          description:
            "Standar fit 50'S Cotton Rayon Slub (Poli 70% Cotton 30%) dengan Logo Deus Shield di Depan dan di dalam print klasik alamat Canggu.",
          price: 259000,
          mainImg:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/Women-Address-White-Front_400x.jpg?v=1603682627",
          CategoryId: 11,
          AuthorId: 1,
          createdAt: "2021-11-28T04:27:05.712Z",
          updatedAt: "2021-11-28T04:27:05.712Z",
        },
        {
          id: 46,
          name: "TOTE BAG (CANGGU) WHITE",
          slug: "TOTE-BAG-(CANGGU)-WHITE",
          description:
            "Canggu Tote Bag merupakan bagian dari Deus Aksesoris.  Berbahan 100% katun kanvas dilengkapi Sablon klasik Deus Ex Machina di sisi depan - belakang dan straps.  Di desain dan telah diuji coba di Deus House of Simple Pleasures, Camperdown, Sydney.",
          price: 245000,
          mainImg:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/1_6f25df1a-2b6a-4163-ad5b-512aa0b8659d_400x.jpg?v=1570774750",
          CategoryId: 14,
          AuthorId: 1,
          createdAt: "2021-11-28T04:40:00.867Z",
          updatedAt: "2021-11-28T04:40:00.867Z",
        },
        {
          id: 24,
          name: "NAITO BOX TEE - ENSIGN BLUE",
          slug: "NAITO-BOX TEE-ENSIGN-BLUE",
          description:
            "The Naito Box Tee is a part of the Deus Ex Machina Spring 2021 Naito Capsule Collection.",
          price: 98000,
          mainImg:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/DMF201665.NaitoBoxTee.EnsignBlue.OnBody.1_400x.jpg?v=1634025188",
          CategoryId: 10,
          AuthorId: 1,
          createdAt: "2021-11-28T04:09:50.980Z",
          updatedAt: "2021-11-28T04:27:27.424Z",
        },
        {
          id: 37,
          name: "WOMEN KICK PANT BLACK",
          slug: "WOMEN-KICK-PANT-BLACK",
          description:
            "The Kick Pant is a part of the Deus Ex Machina Autumn 2021 Women's Capsule Collection.",
          price: 525000,
          mainImg:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/DLP204854.KickPant.Black.1_1000x1000_935523ac-bf09-450e-9393-b0eecbc18962_400x.jpg?v=1624334112",
          CategoryId: 11,
          AuthorId: 1,
          createdAt: "2021-11-28T04:28:28.564Z",
          updatedAt: "2021-11-28T04:28:28.564Z",
        },
        {
          id: 38,
          name: "KIDS CAPITAL LS TEE NAVY MARLE",
          slug: "KIDS-CAPITAL-LS-TEE-NAVY-MARLE",
          description:
            "Kids Capital Tee is a part of the Deus Ex Machina 2021 Kids Collection.",
          price: 245000,
          mainImg:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/back_bc823578-6330-48e2-a9ae-588d27e463e9_400x.jpg?v=1624329830",
          CategoryId: 13,
          AuthorId: 1,
          createdAt: "2021-11-28T04:29:19.941Z",
          updatedAt: "2021-11-28T04:29:19.941Z",
        },
        {
          id: 39,
          name: "KIDS WILDCAT NF NAVY",
          slug: "KIDS-WILDCAT-NF-NAVY",
          description:
            "Kids Wildcat NF adalah bagian dari Koleksi Klasik Deus Ex Machina untuk anak-anak. Kaos anak-anak reguler fit ini menampilkan replika print Deus asli dan print alamat Deus di belakang. Berbahan katun jersey 190gm.",
          price: 189000,
          mainImg:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/2.FRONT_6ccdd5e8-12fa-4710-93c2-706ad0bf9da1_400x.jpg?v=1574223236",
          CategoryId: 13,
          AuthorId: 1,
          createdAt: "2021-11-28T04:30:16.297Z",
          updatedAt: "2021-11-28T04:30:16.297Z",
        },
        {
          id: 40,
          name: "KIDS BUFFALO TEE MIDNIGHT BLUE",
          slug: "KIDS-BUFFALO-TEE-MIDNIGHT-BLUE",
          description:
            "The Kids Buffalo Tee is a part of the Deus Ex Machina Autumn 2021 Kids Collection.",
          price: 189000,
          mainImg:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/back_974d6316-7283-4fde-a5ae-658316d99968_400x.jpg?v=1624328381",
          CategoryId: 13,
          AuthorId: 1,
          createdAt: "2021-11-28T04:32:32.828Z",
          updatedAt: "2021-11-28T04:32:32.828Z",
        },
        {
          id: 41,
          name: "KIDS NEW CANGGU TEE NAVY",
          slug: "KIDS-NEW-CANGGU-TEE-NAVY",
          description:
            "Kids New Canggu Tee adalah bagian dari Deus Ex Machina Autumn 2018 koleksi anak-anak.",
          price: 189000,
          mainImg:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/KidsNewCangguTeeBack_400x.jpg?v=1631596754",
          CategoryId: 13,
          AuthorId: 1,
          createdAt: "2021-11-28T04:33:35.083Z",
          updatedAt: "2021-11-28T04:33:35.083Z",
        },
        {
          id: 42,
          name: "ADDRESS BALI WHITE",
          slug: "ADDRESS-BALI-WHITE",
          description:
            "Kaos address bali adalah bagian dari Koleksi Klasik Deus Ex Machina. Kaos pria reguler fit navy ini menampilkan replika print Deus asli dan print alamat Deus di belakang,katun lembut jersey 190gm.",
          price: 259000,
          mainImg:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/Address-Bali-White-Front_400x.jpg?v=1603436092",
          CategoryId: 12,
          AuthorId: 1,
          createdAt: "2021-11-28T04:34:25.546Z",
          updatedAt: "2021-11-28T04:34:25.546Z",
        },
        {
          id: 47,
          name: "CURVY SOCK WHITE",
          slug: "CURVY-SOCK-WHITE",
          description:
            "The Curvy Sock merupakan bagian dari Deus Ex Machina Spring 2017 Accessories Collection. Sepasang kaus kaki klasik dengan jacquard back, satu warna, logo Deus, dan bungkusan kartu kecil, berbahan 86% katun dan 12% nylon.",
          price: 245000,
          mainImg:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/DMF77808-White-Curvy-Sock-1_400x.jpg?v=1568769466",
          CategoryId: 14,
          AuthorId: 1,
          createdAt: "2021-11-28T04:41:11.138Z",
          updatedAt: "2021-11-28T04:41:11.138Z",
        },
        {
          id: 29,
          name: "KIDS BUSH MECHANIC TEE VINTAGE WHITE",
          slug: "KIDS-BUSH-MECHANIC-TEE-VINTAGE-WHITE",
          description:
            "The Kids Bush Mechanics Tee is a part of the Deus Ex Machina Autumn 2021 Kids Collection.",
          price: 189000,
          mainImg:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/front_f59095f1-3032-4dc1-ba2b-99d965676268_400x.jpg?v=1624328814",
          CategoryId: 13,
          AuthorId: 1,
          createdAt: "2021-11-28T04:15:15.923Z",
          updatedAt: "2021-11-28T04:15:15.923Z",
        },
        {
          id: 30,
          name: "NAITO CANGGU TEE VINTAGE WHITE",
          slug: "NAITO-CANGGU-TEE-VINTAGE-WHITE",
          description:
            "The Naito Canggu Tee is a part of the Deus Ex Machina Spring 2021 Naito Capsule Collection.",
          price: 294000,
          mainImg:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/DMF201666G.NaitoBiarritzTee.VintageWhite.1_f21f0f76-f15c-47ee-93bc-d42f1711c25f_1000x_1_400x.jpg?v=1637131108",
          CategoryId: 10,
          AuthorId: 1,
          createdAt: "2021-11-28T04:16:49.511Z",
          updatedAt: "2021-11-28T04:16:49.511Z",
        },
        {
          id: 31,
          name: "NAITO CANGGU TEE SMOKED PEARL",
          slug: "NAITO-CANGGU-TEE-SMOKED-PEARL",
          description:
            "The Naito Canggu Tee is a part of the Deus Ex Machina Spring 2021 Naito Capsule Collection.",
          price: 294000,
          mainImg:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/Front_4_400x.jpg?v=1634274169",
          CategoryId: 10,
          AuthorId: 1,
          createdAt: "2021-11-28T04:17:41.584Z",
          updatedAt: "2021-11-28T04:17:41.584Z",
        },
        {
          id: 32,
          name: "NAITO BUTTER SHIRT MULTI",
          slug: "NAITO-BUTTER-SHIRT-MULTI",
          description:
            "Relaxed fit resort collar shirt with all over yardage print, chest patch pocket, 100% rayon fabrication with garment wash.",
          price: 406000,
          mainImg:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/DMP2051151B.NaitoButterShirt.Multi.OnBody.1_400x.jpg?v=1634026789",
          CategoryId: 10,
          AuthorId: 1,
          createdAt: "2021-11-28T04:18:53.510Z",
          updatedAt: "2021-11-28T04:18:53.510Z",
        },
        {
          id: 33,
          name: "WOMEN MONIQUE JERSEY TOP VINTAGE WHITE",
          slug: "WOMEN-MONIQUE-JERSEY-TOP-VINTAGE-WHITE",
          description:
            "The Monique Jersey Top is a part of the Deus Ex Machina 2021 Women's Capsule Collection.",
          price: 364000,
          mainImg:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/DLP201855.MoniqueJerseyTop.VintageWhite.1_1000x1000_e31b1f81-d583-47e7-9d9f-289adf75068a_400x.jpg?v=1620007008",
          CategoryId: 11,
          AuthorId: 1,
          createdAt: "2021-11-28T04:20:10.558Z",
          updatedAt: "2021-11-28T04:20:10.558Z",
        },
        {
          id: 34,
          name: "WOMEN ADDRESS YOUNG JERK TEE VINTAGE WHITE",
          slug: "WOMEN-ADDRESS-YOUNG-JERK-TEE-VINTAGE-WHITE",
          description:
            "The Ladies Address Young Jerk Tee is a part of the Deus Ex Machina Autumn 2019 Ladies Collection.",
          price: 276500,
          mainImg:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/3.BACK_400x.jpg?v=1569409744",
          CategoryId: 11,
          AuthorId: 1,
          createdAt: "2021-11-28T04:21:02.886Z",
          updatedAt: "2021-11-28T04:21:02.886Z",
        },
        {
          id: 44,
          name: "D.X.M CUSTOM SURFBOARD BLACK",
          slug: "D.X.M-CUSTOM-SURFBOARD-BLACK",
          description:
            'D.X.M Custom Surfboard adalah kaos dengan bahan katun 32/1"s dengan potongan Rocker Fit khas Deus, dengan screen print ilustrasi desain original Deus.',
          price: 259000,
          mainImg:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/DXM-Front_400x.jpg?v=1603346589",
          CategoryId: 12,
          AuthorId: 1,
          createdAt: "2021-11-28T04:36:13.934Z",
          updatedAt: "2021-11-28T04:36:13.934Z",
        },
        {
          id: 43,
          name: "G50 WHITE",
          slug: "G50-WHITE",
          description:
            "G50 adalah kaos katun jersey dengan potongan Rocket Fit khas Deus , dengan screen-print ilustrasi desain original Deus",
          price: 259000,
          mainImg:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/G50-Front_400x.jpg?v=1603346598",
          CategoryId: 12,
          AuthorId: 1,
          createdAt: "2021-11-28T04:35:30.653Z",
          updatedAt: "2021-11-28T04:37:22.951Z",
        },
        {
          id: 45,
          name: "WILD'S WALLET BROWN",
          slug: "WILD'S-WALLET-BROWN",
          description:
            "Wild's Wallet merupakan bagian dari Deus Ex Machina Spring 2018.",
          price: 364000,
          mainImg:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/1_6f25df1a-2b6a-4163-ad5b-512aa0b8659d_400x.jpg?v=1570774750",
          CategoryId: 14,
          AuthorId: 1,
          createdAt: "2021-11-28T04:39:08.501Z",
          updatedAt: "2021-11-28T04:39:08.501Z",
        },
        {
          id: 48,
          name: "TRANSIT SLINGBAG TAN",
          slug: "TRANSIT-SLINGBAG-TAN",
          description:
            "Transit Slingbag, Material: 100% nylon. Made of nylon fabric. Logo on the front. Adjustable shoulder strap. Zipped main compartment. 2 front pockets. Buttoned rear pocket.",
          price: 245000,
          mainImg:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/DMS2071077.TransitSlingBag.Tan.1_400x.jpg?v=1619230270",
          CategoryId: 14,
          AuthorId: 1,
          createdAt: "2021-11-28T04:42:05.037Z",
          updatedAt: "2021-11-28T04:42:05.037Z",
        },
        {
          id: 49,
          name: "SHIELD STANDARD DAD CAP BARK",
          slug: "SHIELD-STANDARD-DAD-CAP-BARK",
          description:
            "Transit Slingbag, Material: 100% nylon. Made of nylon fabric. Logo on the front. Adjustable shoulder strap. Zipped main compartment. 2 front pockets. Buttoned rear pocket.",
          price: 255500,
          mainImg:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/DMF207881.ShieldStandardDadCap.bark.1_400x.jpg?v=1621227198",
          CategoryId: 14,
          AuthorId: 1,
          createdAt: "2021-11-28T04:43:04.337Z",
          updatedAt: "2021-11-28T04:43:04.337Z",
        },
        {
          id: 50,
          name: "NAITO CHORE JACKET ENSIGN BLUE",
          slug: "NAITO-CHORE-JACKET-ENSIGN-BLUE",
          description:
            "The Naito Chore Jacket is a part of the Deus Ex Machina Fall 2021 Naito Capsule Collection.",
          price: 1295000,
          mainImg:
            "https://cdn.shopify.com/s/files/1/0554/7317/products/DMF206837.NaitoChoreJacket.EnsignBlue.OnBody.1_400x.jpg?v=1634023338",
          CategoryId: 10,
          AuthorId: 1,
          createdAt: "2021-11-28T04:44:37.919Z",
          updatedAt: "2021-11-28T04:44:37.919Z",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
