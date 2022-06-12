import User from "../models/User.js";

export const updateUser = async (req, res, next) => {
  try {
    ///find by id and update methods return preivous data ,prevent this we use  new:true
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};
export const deleteUser = async (req, res, next) => {
  async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("DELETE SUCCESS");
    } catch (err) {
      next(err);
    }
  };
};
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
