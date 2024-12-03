import express from "express";
import { getCurrentUser, updateUser } from "../controllers/UserController.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";
import { validateUpdateUserInput } from "../middlewares/validationMiddlewares.js";

const router = express.Router();

// router.route("/:id").get(getCurrentUser).patch(updateUser);
router.get("/current-user", getCurrentUser);
router.patch("/update-user", validateUpdateUserInput, updateUser);
export default router;
