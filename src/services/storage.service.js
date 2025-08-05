// SDK initialization

const ImageKit = require("imagekit");

const imagekit = new ImageKit({
  publicKey: process.env.imagekitPublicKey,
  privateKey: process.env.imagekitPrivateKey,
  urlEndpoint: process.env.imagekitUrlEndpoint,
});

async function uploadImage(file, filename) {
  try {
    const response = await imagekit.upload({
      file: file, // base64 or file path
      fileName: filename, // required
      folder: "cohort-ai-social", // optional
    });
    console.log("Image uploaded successfully:", response);
    return response;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
}

module.exports = {
  uploadImage,
};
