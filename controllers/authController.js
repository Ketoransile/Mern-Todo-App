import { StatusCodes } from "http-status-codes";
import User from "../models/userModel.js";
import { hashPassword } from "../utils/passwordUtils.js";
import { correctPassword } from "../utils/passwordUtils.js";
import { UnauthenticatedError } from "../errors/customErrors.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const hashedPassword = await hashPassword(req.body.password);
    req.body.password = hashedPassword;
    const birthYearNumber = Number(req.body.birthYear);
    req.body.birthYear = birthYearNumber;
    req.body.confirmPassword = undefined;
    const user = await User.create(req.body);
    res.status(StatusCodes.CREATED).json({
      msg: "User Created",
    });
  } catch (error) {
    res.status(500).json({
      msg: "There is internal server error while creating user",
    });
  }
};
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email }).select(
      "+password"
    );
    const isValidUser =
      user && (await correctPassword(req.body.password, user.password));

    if (!isValidUser) throw new UnauthenticatedError("Invalid credentials");
    const payload = { userId: user._id };
    const oneDay = 1000 * 60 * 60 * 24;
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    // res.clearCookie("jwt");
    res.cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + oneDay),
      secure: process.env.NODE_ENV === "production",
    });
    console.log("Set-Cookie Headers:", res.getHeaders()["set-cookie"]);
    res.status(StatusCodes.OK).json({ msg: "User logged in " });
  } catch (error) {
    next(error);
  }
};
export const logout = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: "User Logged out" });
};
