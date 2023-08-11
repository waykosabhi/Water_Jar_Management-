import express from "express";
import jarRoutes from "./routes/jarRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import mongoose from "mongoose";
mongoose.connect(process.env.MONGO_URL);
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use("/api/order", orderRoutes);
app.use("/api/jars", jarRoutes);
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({
    message: "error" + err.message || "something went wrong",
  });
});

app.use((req, res) => {
  res.status(404).json({
    message: "Resource Not Found",
  });
});
mongoose.connection.once("open", () => {
  console.log("Database Connected");
  app.listen(process.env.PORT, console.log("server Runnig"));
});
mongoose.connection.on("error", (err) => {
  console.log(err);
});
