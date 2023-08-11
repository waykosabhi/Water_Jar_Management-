import express from "express";
import {
  addUsers,
  deleteUsers,
  getAllUsers,
  updateUsers,
} from "../controller/userController.js";

const router = express.Router();

router
  .get("/", getAllUsers)
  .post("/register", addUsers)
  .put("/update/:id", updateUsers)
  .delete("/delete/:id", deleteUsers);

export default router;
