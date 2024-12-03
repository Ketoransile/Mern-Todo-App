import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/customErrors.js";
import User from "../models/userModel.js";
import { correctPassword, hashPassword } from "../utils/passwordUtils.js";
export const getCurrentUser = async (req, res, next) => {
  try {
    const { userId } = req.user;
    console.log("user id from authenticator is:", userId);
    const user = await User.findOne({ _id: userId });
    if (!user) {
      throw new NotFoundError("User with this Id was not found");
    }
    console.log("User from the Usercontroller.js getCurrent User", user);
    res.status(StatusCodes.OK).json({ user });
  } catch (error) {
    next(error);
  }
};
export const updateUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.user.userId });
    if (!user) {
      throw new NotFoundError("No user found with that ID");
    }
    const { email, password, username, phone, birthdayYear } = req.body;

    user.email = email;
    user.username = username;
    user.phone = phone;
    user.birthdayYear = birthdayYear;
    const hashedPassword = await hashPassword(password);
    user.password = hashedPassword;

    await user.save();
    res.status(StatusCodes.OK).json({
      msg: "User updated Successfully",
    });
  } catch (error) {
    next(error);
  }
};
