import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};

export const correctPassword = async (password, hashedPassword) => {
  const correct = await bcrypt.compare(password, hashedPassword);
  return correct;
};
