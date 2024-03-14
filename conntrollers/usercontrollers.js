let user = require("../model/model");

module.exports = function () {
  return {
    signup: async function (req, res) {
      let userRecord = new user(req.body);
      try {
        let result = await userRecord.save();
        res.send(result);
      } catch (err) {
        console.log(err);
        res.send(err);
      }
    },
  };
};
