const express = require("express");
const {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/user");

const userRouter = express.Router();

userRouter.route("/").get(getUsers).post(createUser);

userRouter.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = {
  userRouter,
};
