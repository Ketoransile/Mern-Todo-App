import { UnauthenticatedError } from "../errors/customErrors.js";
import jwt from "jsonwebtoken";

export const authenticateUser = async (req, res, next) => {
  try {
    // console.log(
    //   "req.cookies console log from authenticatemiddleware",
    //   req.cookies
    // );
    const token = req.cookies.token;
    if (!token) {
      throw new UnauthenticatedError("authentication invalid");
    }
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId };
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};
