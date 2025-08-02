const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function authMiddleware(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findOne({ _id: decoded.id });
    req.user = user; // Attach user info to request object
    next(); // Call the next middleware or route handler
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Invalid token, Please login again" });
  }
}
module.exports = authMiddleware;
