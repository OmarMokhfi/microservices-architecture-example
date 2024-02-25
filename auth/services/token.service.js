let jwt = require("jsonwebtoken");

let SECRET_KEY = "omarmokhfi";

const encodeToken = (id) => {
  let token = jwt.sign({ id: id }, SECRET_KEY);
  return token;
};

const decodeToken = (token) => {
  if (!token) return null;
  let [type, value] = token.split(" ");
  if (type != "Bearer") return null;
  try {
    let decoded = jwt.verify(value, SECRET_KEY);
    return decoded.id;
  } catch (err) {
    return null;
  }
};

module.exports = {
  encodeToken,
  decodeToken,
};
