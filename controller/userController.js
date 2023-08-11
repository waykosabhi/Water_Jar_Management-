import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import User from "../model/User.js";

export const getAllUsers = asyncHandler(async (req, res) => {
  const result = await User.find({ role: "customer" });
  res.json({ message: "User Fetch Success", result });
});

export const addUsers = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { password, name } = req.body;
  const hasPass = await bcrypt.hash(password || name, 10);
  const result = await User.create({
    ...req.body,
    password: hasPass,
    role: "customer",
  });
  res.json({ message: "User Create Success" });
});

export const updateUsers = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await User.findByIdAndUpdate(id, req.body);
  res.json({ message: "User Update Success", result });
});

export const deleteUsers = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await User.findByIdAndDelete(id);
  res.json({ message: "User Delete Success" });
});
