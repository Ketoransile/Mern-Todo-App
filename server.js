import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import noteRoutes from "./routes/noteRouter.js";
import authRoutes from "./routes/authRouter.js";
import userRoutes from "./routes/userRouter.js";
import mongoose from "mongoose";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";
import cookieParser from "cookie-parser";
import { authenticateUser } from "./middlewares/authMiddleware.js";

// public
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(cookieParser());

// app.use((req, res, next) => {
//   console.log("Request URL:", req.originalUrl);
//   console.log("Request params:", req.params);
//   console.log("Request body:", req.body);
//   next();
// });
// routes middleware
app.use("/api/v1/notes", authenticateUser, noteRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", authenticateUser, userRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});
// app.use((err, req, res, next) => {
//   res.status(500).json({ msg: "Something went Wrong" });
// });
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
} catch (error) {
  console.log("mongo db connection Error...................", error);
  process.exit(1);
}
