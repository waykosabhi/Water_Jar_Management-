import asyncHandler from "express-async-handler";
import Orders from "../model/Orders.js";

export const getAllOrder = asyncHandler(async (req, res) => {
  const result = await Orders.find().populate("customer").populate("jars");
  res.json({ message: "Orders Fetch Success", result });
});
export const getUserOrder = asyncHandler(async (req, res) => {
  console.log(req.params.id);
  const result = await Orders.find({ customer: req.params.id })
    .populate("customer")
    .populate("jars");
  res.json({ message: "Orders Fetch Success", result });
});
export const addOrder = asyncHandler(async (req, res) => {
  const result = await Orders.create(req.body);
  res.json({ message: "Orders Create Success", result });
});
export const updateOrder = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await Orders.findByIdAndUpdate(id, req.body);
  res.json({ message: "Orders Update Success", result });
});
export const deleteOrder = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await Orders.findByIdAndDelete(id);

  res.json({ message: "Orders Delete Success" });
});
export const destroyOrder = asyncHandler(async (req, res) => {
  const result = await Orders.deleteMany();
  res.json({ message: "Orders Destroy Success" });
});
