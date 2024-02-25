let express = require("express");
let bodyParser = require("body-parser");

const { encodeToken, decodeToken } = require("./services/token.service");
const { USERS } = require("./helpers/user");

let app = express();
app.use(bodyParser.json());

app.post("/auth/login", function (req, res) {
  let { email } = req.body;
  // Get user by email
  let user = USERS.filter((item) => item.email == email)[0];
  // Encode the user id into a jwt token
  let token = encodeToken(user.id);
  res.status(200).json({
    id: user.id,
    token,
  });
});

app.get("/auth", function (req, res) {
  // Get the user id from by decoding the jwt token
  let id = decodeToken(req.headers.authorization);
  if (id) res.status(200).json(id);
  else res.status(401).json("Unauthorized");
});

app.listen(3001);
