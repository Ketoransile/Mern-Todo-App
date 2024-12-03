import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    select: false,
  },
  confirmPassword: {
    type: String,
    select: false,
  },

  phone: {
    type: String,
  },
  birthdayYear: {
    type: Number,
  },
});

export default mongoose.model("User", userSchema);
