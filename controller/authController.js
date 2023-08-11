import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/User.js";
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const isFound = await User.findOne({ email });
  if (!isFound) {
    return res.status(401).json({
      message: "Invalid Credentials emails",
    });
  }
  const isValid = await bcrypt.compare(password, isFound.password);

  if (!isValid) {
    return res.status(401).json({
      message: "Invalid  Credentials Password",
    });
  }
  const token = jwt.sign({ userId: isFound._id }, process.env.JWT_KEY);
  res.cookie("authToken", token, {
    httpOnly: true,
    // maxAge:"",
    // secure:true
  });

  res.json({
    message: "LOgin Success",
    result: {
      name: isFound.name,
      id: isFound._id,
    },
  });
});
