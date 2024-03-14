let mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  userId: { type: "Number" },
  Firstname: { type: "string" },
  Lastname: { type: "string" },
  Emailid: { type: "string" },
  password: { type: "string" },
  Address: { type: "string" },
  Phonenumber: { type: "string" },
  RoleId: { type: "string" },
});

module.exports = mongoose.model("user", userschema);
