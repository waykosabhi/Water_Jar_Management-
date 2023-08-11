// import asyncHandler from "express-async-handler";
import asyncHandler from "express-async-handler";
import Jar from "../model/Jar.js";
export const getAllJar = asyncHandler(async (req, res) => {
  const result = await Jar.find();
  res.json({ message: "Jar Fetch Success", result });
});
export const addJar = asyncHandler(async (req, res) => {
  const result = await Jar.create(req.body);
  res.json({ message: "Jar Create Success" });
});
export const updateJar = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await Jar.findByIdAndUpdate(id, req.body);
  res.json({ message: "Jar Update Success", result });
});
export const deleteJar = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await Jar.findByIdAndDelete(id);

  res.json({ message: "Jar Delete Success" });
});
