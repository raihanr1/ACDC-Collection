const jwt = require("jsonwebtoken");

function signToken(payload) {
  const token = jwt.sign(payload, process.env.JSON_PRIVATE_KEY);
  return token;
}

function payloadToken(token) {
  const decoded = jwt.verify(token, process.env.JSON_PRIVATE_KEY);
  return decoded;
}

module.exports = {
  signToken,
  payloadToken,
};
