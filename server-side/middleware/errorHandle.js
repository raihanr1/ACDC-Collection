function errorHandle(err, req, res, next) {
  if (err.name === "ForeignKeyConstraintError") {
    res.status(404).json({
      message: "Category not found",
    });
  } else if (
    err.message === "Email is required" ||
    err.message === "Password is required" ||
    err.message === "Invalid email or password"
  ) {
    res.status(400).json(err);
  } else if (err.name === "SequelizeUniqueConstraintError") {
    res.status(401).json({
      message: "Email must be unique",
    });
  } else if (
    err.message === "Category not found" ||
    err.message === "Product not found"
  ) {
    res.status(404).json(err);
  } else if (err.name === "JsonWebTokenError") {
    res.status(401).json({
      message: "Invalid Token",
    });
  } else if (err.name === "SequelizeValidationError") {
    res.status(400).json({
      message: err.errors[0].message,
    });
  } else if (err.message === "You'r not authorized") {
    res.status(403).json(err);
  } else if (err.message === "User not found") {
    res.status(401).json({
      message: "You'r not authentication",
    });
  } else {
    res.status(500).json({
      message: "Invalid server error",
    });
  }
}

module.exports = { errorHandle };
