const { Product, Category, Image } = require("../models");
class Controller {
  async getAllProducts(req, res, next) {
    try {
      let response = Product.findAll({
        include: {
          model: Category,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        include: {
          model: Image,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        attributes: {
          exclude: ["createdAt", "updatedAt", "AuthorId"],
        },
      });
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
