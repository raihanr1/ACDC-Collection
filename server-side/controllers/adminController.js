const { User, Category, Product } = require("../models");
const { isValidPassword } = require("../helper/bcrypt");
const { signToken } = require("../helper/jwt");
class Controller {
  async adminLogin(req, res, next) {
    try {
      let { email, password } = req.body;
      if (!email) {
        throw {
          message: "Email is required",
        };
      }
      if (!password) {
        throw {
          message: "Password is required",
        };
      }
      let data = await User.findOne({
        where: {
          email,
        },
      });
      if (!data) {
        throw {
          message: "Invalid email or password",
        };
      }
      let isValid = isValidPassword(password, data.password);
      if (!isValid) {
        throw {
          message: "Invalid email or password",
        };
      }
      let payload = {
        id: data.id,
        email: data.email,
        role: data.role,
      };
      let access_token = signToken(payload);
      res.status(200).json({
        access_token,
      });
    } catch (error) {
      next(error);
    }
  }

  async adminRegister(req, res, next) {
    try {
      let { username, email, password, phoneNumber, address } = req.body;
      let role = "Admin";
      let data = User.create({
        username,
        email,
        password,
        phoneNumber,
        address,
        role,
      });
      res.status(201).json({
        id: data.id,
        email: data.email,
        role: data.role,
      });
    } catch (error) {
      next(error);
    }
  }

  async createNewCategory(req, res, next) {
    try {
      let { name, mainImg } = req.body;
      let data = Category.create({
        name,
        mainImg,
      });
      res.status(201).json({
        id: data.id,
        name: data.name,
      });
    } catch (error) {
      next(error);
    }
  }

  async createNewProduct(req, res, next) {
    try {
      let id = req.params.category_id;
      let { name, description, price, mainImg, CategoryId } = req.body;
      let category = Category.findByPk(+id);
      if (!category) {
        throw {
          message: "Category not found",
        };
      }
      let data = Product.create({
        name,
        description,
        price,
        mainImg,
        CategoryId,
        AuthorId: req.user.id,
      });
      let { name, description, price, mainImg, CategoryId, slug } = data;
      res.status(201).json({
        name,
        description,
        price,
        mainImg,
        CategoryId,
        slug,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateProduct(req, res, next) {
    try {
      let id = req.params.product_id;
      let { name, description, price, mainImg, CategoryId } = req.body;
      let data = Product.findByPk(+id);
      if (!data) {
        throw {
          message: "Product not found",
        };
      }
      let product = Product.update({
        name,
        description,
        price,
        mainImg,
        CategoryId,
      });
      let response = {
        name,
        description,
        price,
        mainImg,
        CategoryId,
        slug,
      };
      if (!product[0]) {
        res.status(200).json({
          message: "Nothing update product",
        });
      } else {
        res.status(200).json(response);
      }
    } catch (error) {
      next(error);
    }
  }

  async deleteProduct() {
    try {
      let id = req.params.product_id;
      let data = Product.findByPk(+id);
      if (!data) {
        throw {
          message: "Product not found",
        };
      }
      let response = Product.destroy({
        where: {
          id: +id,
        },
      });
      res.status(200).json({
        message: "Product success deleted",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
