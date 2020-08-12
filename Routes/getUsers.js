const mongoose = require("mongoose");
const Users = require("../Models/Customer");

module.exports = (app) => {
  app.get("/admin/getUsers", async (req, res) => {
    let users = await Users.find().select({
      email: 1,
      _id: 1,
      firstName: 1,
      lastName: 1,
      phoneNumber: 1,
      imageID: 1,
    });

    console.log(users);
    res.status(200).send(users);
  });
};
