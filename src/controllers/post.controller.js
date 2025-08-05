const postModel = require("../models/post.model");
const { generateCaption } = require("../services/ai.service");
const { uploadImage } = require("../services/storage.service");
const { v4: uuidv4 } = require("uuid");

async function createPostController(req, res) {
  try {
    const file = req.file;
    console.log("File receive:", file);
    // const base64ImageFile = file.buffer.toString("base64");
    const base64ImageFile = new Buffer.from(file.buffer).toString("base64");
    const caption = await generateCaption(base64ImageFile);

    const result = await uploadImage(base64ImageFile, `${uuidv4()}`);

    //  const [ caption, result ] = await Promise.all([
    //     generateCaption(base64Image),
    //     uploadFile(file.buffer, `${uuidv4()}`)
    // ]);

    // console.log("Caption generated rachit:", caption);
    // console.log("Image upload result rachit:", result);

    // console.log("req.user", req.user);
    // console.log("result url:", result.url);
    // console.log("caption:", caption);

    // const post = await postModel.create({
    //   caption: caption,
    //   image: result.url,
    //   user: req.user._id, // Assuming req.user is set by authMiddleware
    // });

    const post = await postModel.create({
      caption: caption,
      image: result.url,
      user: req.user._id, // Assuming req.user is set by authMiddleware
    });
    // post.save();
    console.log("Response successfully ");
    console.log(" post: ", post);
    console.log(" result: ", result.url);
    console.log(" caption: ", caption);

    res.status(201).json({
      message: "post created successfully",
      result: result,
      caption: caption,
      post: post,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
}

module.exports = {
  createPostController,
};
