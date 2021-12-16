const { User } = require("../models");
const { payloadToken } = require("../helper/jwt");

async function authentication(req, res, next) {
  try {
    let payload = payloadToken(req.headers.access_token);
    let user = await User.findOne({
      where: {
        id: payload.id,
        email: payload.email,
      },
    });
    if (!user) {
      throw {
        message: "User not found",
      };
    } else {
      req.user = {
        id: payload.id,
        email: payload.email,
        role: payload.role,
      };
      next();
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { authentication };
