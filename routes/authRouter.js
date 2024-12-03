import express from "express";
import { login, logout, register } from "../controllers/authController.js";
import {
  validateLoginInput,
  validateRegisterUserInput,
} from "../middlewares/validationMiddlewares.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";

const router = new express.Router();
router.post("/register", validateRegisterUserInput, register);
router.post("/login", validateLoginInput, login);
router.get("/logout", authenticateUser, logout);
export default router;
