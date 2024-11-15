const Category = require("../modal/category"); // Import model
const express = require("express");
const router = express.Router();

const cloudinary = require("cloudinary").v2;

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CONFIG_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CONFIG_API_KEY,
  api_secret: process.env.CLOUDINARY_CONFIG_API_SECRET,
});

// GET all categories
router.get("/", async (req, res) => {
  try {
    const categoryList = await Category.find();
    res.status(200).json(categoryList);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (!category) {
    return res.status(404).json({ error: "Category not found", status: false });
  }
  res.status(200).json(category);
});

router.delete("/:id", async (req, res) => {
  const deleteUser = await Category.findByIdAndDelete(req.params.id);
  if (!deleteUser) {
    return res.status(404).json({ error: "Category not found", status: false });
  }
  res.status(200).json({ message: "Category is delete", status: true });
});

// POST create a new category with image uploads
router.post("/create", async (req, res) => {
  try {
    if (
      !req.body.images ||
      !Array.isArray(req.body.images) ||
      req.body.images.length === 0
    ) {
      return res
        .status(400)
        .json({ error: "Invalid or missing 'images' field", status: false });
    }

    const { default: pLimit } = await import("p-limit");
    const limit = pLimit(2); // Limit uploads to 2 concurrent requests

    // Map over images and upload each one to Cloudinary
    const imagesToUpload = req.body.images.map((image) =>
      limit(async () => {
        const result = await cloudinary.uploader.upload(image);
        return result;
      })
    );

    // Wait for all images to be uploaded
    const uploadStatus = await Promise.all(imagesToUpload);

    // Extract secure URLs from Cloudinary responses
    const imgurl = uploadStatus.map((item) => item.secure_url);

    // Check if all images were successfully uploaded
    if (!uploadStatus || !imgurl.length) {
      return res
        .status(500)
        .json({ error: "Images could not be uploaded!", status: false });
    }

    // Create and save new category
    let category = new Category({
      name: req.body.name,
      images: imgurl,
      color: req.body.color,
    });

    category = await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message, status: false });
  }
});

router.put("/:id", async (req, res) => {
  if (
    !req.body.images ||
    !Array.isArray(req.body.images) ||
    req.body.images.length === 0
  ) {
    return res
      .status(400)
      .json({ error: "Invalid or missing 'images' field", status: false });
  }

  const { default: pLimit } = await import("p-limit");
  const limit = pLimit(2); // Limit uploads to 2 concurrent requests

  // Map over images and upload each one to Cloudinary
  const imagesToUpload = req.body.images.map((image) =>
    limit(async () => {
      const result = await cloudinary.uploader.upload(image);
      return result;
    })
  );

  // Wait for all images to be uploaded
  const uploadStatus = await Promise.all(imagesToUpload);

  // Extract secure URLs from Cloudinary responses
  const imgurl = uploadStatus.map((item) => item.secure_url);

  // Check if all images were successfully uploaded
  if (!uploadStatus || !imgurl.length) {
    return res
      .status(500)
      .json({ error: "Images could not be uploaded!", status: false });
  }
  const category = await Category.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      images: imgurl,
      color: req.body.color,
    },
    { new: true }
  );
  if (!category) {
    return res.status(404).json({ error: "Category not found", status: false });
  }
  res.status(200).json(category);
});

module.exports = router;
