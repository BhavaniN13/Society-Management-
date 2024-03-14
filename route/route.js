let usercontrollers = require("../conntrollers/usercontrollers");

module.exports = function (app) {
  app.post("/signup", function (req, res) {
    usercontrollers.signup(req, res);
  });
};
