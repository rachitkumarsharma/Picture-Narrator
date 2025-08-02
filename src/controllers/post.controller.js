const { PostModel } = require("../models/post.model");
const { generateCaption } = require("../services/ai.service");

async function createPostController(req, res) {
  try {
    const file = req.file;
    console.log("File receive:", file);
    // const base64ImageFile = file.buffer.toString("base64");
    const base64ImageFile = new Buffer.from(file.buffer).toString("base64");
    const caption = await generateCaption(base64ImageFile);

    res
      .status(201)
      .json({ message: "Caption generated successfully", caption: caption });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
}

module.exports = {
  createPostController,
};
