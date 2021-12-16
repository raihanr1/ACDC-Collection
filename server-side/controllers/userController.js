const { Product, Category, Image } = require("../models");
class Controller {
  static async getAllProducts(req, res, next) {
    try {
      let response = await Product.findAll({
        include: [
          {
            model: Category,
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
          {
            model: Image,
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
        attributes: {
          exclude: ["createdAt", "updatedAt", "AuthorId"],
        },
      });
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  static async getAllCategories(req, res, next) {
    try {
      let response = await Category.findAll();
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
