import express from "express";
import {
  addJar,
  deleteJar,
  getAllJar,
  updateJar,
} from "../controller/jarController.js";

const router = express.Router();

router
  .get("/", getAllJar)
  .post("/add", addJar)
  .put("/update/:id", updateJar)
  .delete("/delete/:id", deleteJar);

export default router;
