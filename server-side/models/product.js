"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category, { foreignKey: "CategoryId" });
      Product.hasMany(models.Image, { foreignKey: "ProductId" });
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Name is required",
          },
          notEmpty: {
            msg: "Name is required",
          },
        },
      },
      slug: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Description is required",
          },
          notEmpty: {
            msg: "Description is required",
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Price is required",
          },
          notEmpty: {
            msg: "Price is required",
          },
        },
      },
      mainImg: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Image URL is required",
          },
          notEmpty: {
            msg: "Image URL is required",
          },
          isUrl: {
            msg: "Invalid format image",
          },
        },
      },
      CategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Category id is required",
          },
          notEmpty: {
            msg: "Category id is required",
          },
        },
      },
      AuthorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Author id is required",
          },
          notEmpty: {
            msg: "Author id is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Product",
      hooks: {
        beforeCreate(product) {
          if (product.name) {
            let slug = product.name.split(" ").join("-");
            product.slug = slug;
          }
        },
        beforeUpdate(product) {
          if (product.name) {
            let slug = product.name.split(" ").join("-");
            product.slug = slug;
          }
        },
      },
    }
  );
  return Product;
};
