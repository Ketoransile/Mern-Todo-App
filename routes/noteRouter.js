import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  updateNote,
} from "../controllers/noteController.js";
import {
  validateNoteIdParamater,
  validateNoteInput,
} from "../middlewares/validationMiddlewares.js";

const router = express.Router();

router.route("/create-note").post(validateNoteInput, createNote);
router.get("/get-all-notes", getAllNotes);

// router.route("/:id").delete(validateNoteIdParamater, deleteNote)
// router.delete("/:id", validateNoteIdParamater, deleteNote);
router.delete("/:id", deleteNote);
router.get("/:id", (req, res) => {
  console.log("Request params:", req.params);
  res.send(`Received ID: ${req.params.id}`);
});
router.patch("/update-note/:id", updateNote);
export default router;
