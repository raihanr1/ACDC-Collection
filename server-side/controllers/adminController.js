const { User, Category, Product, Image, sequelize } = require("../models");
const { isValidPassword } = require("../helper/bcrypt");
const { signToken } = require("../helper/jwt");
class Controller {
  static async adminLogin(req, res, next) {
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

  static async adminRegister(req, res, next) {
    try {
      let { username, email, password, phoneNumber, address } = req.body;
      let role = "Admin";
      let data = await User.create({
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

  static async createNewCategory(req, res, next) {
    try {
      let { name, mainImg } = req.body;
      let data = await Category.create({
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

  static async createNewProduct(req, res, next) {
    const t = await sequelize.transaction();
    try {
      let id = req.params.category_id;
      let { name, description, price, mainImg, CategoryId, reserveImage } =
        req.body;
      let category = Category.findByPk(+id);
      if (!category) {
        throw {
          message: "Category not found",
        };
      }
      let data = await Product.create({
        name,
        description,
        price,
        mainImg,
        CategoryId,
        AuthorId: req.user.id,
      });
      let promise = [];
      reserveImage.forEach(async (el) => {
        let newPromise = Image.create({
          ProductId: data.id,
          imgUrl: el,
        });
        promise.push(newPromise);
      });
      await Promise.all(promise);
      t.commit();
      res.status(201).json({
        name: data.name,
        description: data.description,
        price: data.price,
        mainImg: data.mainImg,
        CategoryId: data.CategoryId,
        slug: data.slug,
      });
    } catch (error) {
      t.rollback();
      next(error);
    }
  }

  static async updateProduct(req, res, next) {
    try {
      let id = req.params.product_id;
      let { name, description, price, mainImg, CategoryId } = req.body;
      let data = await Product.findByPk(+id);
      if (!data) {
        throw {
          message: "Product not found",
        };
      }
      let product = await Product.update(
        {
          name,
          description,
          price,
          mainImg,
          CategoryId,
        },
        {
          where: {
            id: +id,
          },
          returning: true,
        }
      );
      let response = {
        name: product.name,
        description: product.description,
        price: product.price,
        mainImg: product.mainImg,
        CategoryId: product.CategoryId,
        slug: product.slug,
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

  static async deleteProduct(req, res, next) {
    try {
      let id = req.params.product_id;
      let data = await Product.findByPk(+id);
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
