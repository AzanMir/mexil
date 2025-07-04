const expressJwt = require("express-jwt");
require("dotenv").config();

const authMiddleware = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"], // Use HS256 algorithm
  getToken: function fromHeaderOrQuerystring(req) {
    if (
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
      return req.headers.authorization.split(" ")[1];
    }
    return null;
  },
});

module.exports = authMiddleware;
