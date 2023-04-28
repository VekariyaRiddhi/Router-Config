const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODBURI).catch((err) => {
  console.log(err);
});
