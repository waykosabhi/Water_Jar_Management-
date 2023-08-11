import express from "express";

import {
  addOrder,
  deleteOrder,
  destroyOrder,
  getAllOrder,
  getUserOrder,
  updateOrder,
} from "../controller/orderController.js";

const router = express.Router();

router
  .get("/", getAllOrder)
  .get("/:id", getUserOrder)
  .post("/add", addOrder)
  .put("/update/:id", updateOrder)
  .delete("/delete/:id", deleteOrder)
  .delete("/destroy/", destroyOrder);

export default router;
