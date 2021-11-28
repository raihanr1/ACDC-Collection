async function authorization(req, res, next) {
  try {
    if (req.user.role !== "Admin") {
      throw {
        message: "You'r not authorized",
      };
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { authorization };
