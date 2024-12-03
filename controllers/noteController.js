import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/customErrors.js";
import Note from "../models/noteModel.js";
import User from "../models/userModel.js";
export const createNote = async (req, res, next) => {
  try {
    const { content } = req.body;
    const user = await User.findOne({ _id: req.user.userId });
    if (!user) {
      throw new NotFoundError("No use found with that ID");
    }
    const existingNote = await Note.findOne({
      content,
      createdBy: req.user.userId,
    });
    if (existingNote) {
      throw new BadRequestError("Note already exists");
    }
    const note = new Note({
      content,
      createdBy: user._id,
    });
    await note.save();
    res.status(StatusCodes.OK).json({ msg: "Note created successfully", note });
  } catch (error) {
    next(error);
  }
};
export const deleteNote = async (req, res, next) => {
  const deletedNote = await Note.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({
    msg: "Note deleted Successfully",
    deleteNote,
  });
};
export const getAllNotes = async (req, res, err) => {
  try {
    const notes = await Note.find({ createdBy: req.user.userId }).sort({
      createdAt: -1,
    });

    res.status(StatusCodes.OK).json({ notes });
  } catch (error) {
    next(error);
  }
};

export const updateNote = async (req, res) => {
  const { id } = req.params;
  const { active } = req.body;

  try {
    const note = await Note.findByIdAndUpdate(id, { active }, { new: true });
    if (!note) {
      return res.status(404).json({ msg: "Note not found" });
    }
    res.status(200).json({ note });
  } catch (error) {
    res.status(500).json({ msg: "Failed to update note", error });
  }
};
