const mongoose = require("mongoose");

require("dotenv").config();

const connectedDb = async () => {
  await mongoose
    .connect(process.env.mongo_URI)
    .then(() => {
      console.log("Db connection successfully");
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};

module.exports = connectedDb;
