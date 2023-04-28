const { User } = require("../models/user");

// GET /users ⇒ return all users
const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    next(error);
  }
};

// GET /users/:id ⇒ return a single user
const getUser = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const user = await User.findById(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

// POST /users ⇒ create a new user
const createUser = async (req, res, next) => {
  try {
    const { body } = req;
    const user = await User.create(body);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

// PUT /users/:id ⇒ update a specific user
const updateUser = async (req, res, next) => {
  const {
    params: { id },
    body,
  } = req;

  try {
    const user = await User.findOneAndUpdate(id, body);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

// DELETE /users/:id ⇒ delete a specific user
const deleteUser = async (req, res, next) => {
  const {
    params: { id },
  } = req;

  try {
    const users = await User.findByIdAndDelete(id);
    res.json(users);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
};
