const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    fname: String,
    pnum: String,
    
    dpone: String,
    dptwo: String,
    email: { type: String, unique: true },
    password: String,

  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailsScehma);
