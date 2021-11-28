const bcrypt = require("bcryptjs");

function hashedPassword(password) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

function isValidPassword(password, DB_Password) {
  const isValid = bcrypt.compareSync(password, DB_Password);
  return isValid;
}

module.exports = {
  hashedPassword,
  isValidPassword,
};
