const express = require("express");
const authRoutes = require("./routers/auth.routes");
const cookieParser = require("cookie-parser");
const postRoutes = require("./routers/post.route");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

module.exports = app;
