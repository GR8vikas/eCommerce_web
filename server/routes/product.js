const Category = require("../modal/category.js");
const Product = require("../modal/Product.js");
const express = require("express");
const router = express.Router();

const cloudinary = require("cloudinary").v2;

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CONFIG_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CONFIG_API_KEY,
  api_secret: process.env.CLOUDINARY_CONFIG_API_SECRET,
});

router.get("/", async (req, res) => {
  try {
    const productList = await Product.find().populate("category");
    res.status(200).json(productList);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({ error: "Category not found", status: false });
  }
  res.status(200).json(product);
});

router.delete("/:id", async (req, res) => {
  const deleteUser = await Product.findByIdAndDelete(req.params.id);
  if (!deleteUser) {
    return res.status(404).json({ error: "product not found", status: false });
  }
  res.status(200).json({ message: "product is delete", status: true });
});

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
    const category = await Category.findById(req.body.category);
    if (!category) {
      return res.status(404).send("invaild Category!");
    }

    // Create and save new category
    let product = new Product({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      images: imgurl,
      category: category._id,
      brand: req.body.brand,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      numReviews: req.body.numReviews,
      dateCreated: req.body.dateCreated,
      isFeature: req.body.isFeature,
    });

    product = await product.save();
    res.status(201).json(product);
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
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      images: imgurl,
      category: req.body.category,
      brand: req.body.brand,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      numReviews: req.body.numReviews,
      dateCreated: req.body.dateCreated,
      isFeature: req.body.isFeature,
    },
    { new: true }
  );
  if (!product) {
    return res.status(404).json({ error: "product not found", status: false });
  }
  res.status(200).json(product);
});
module.exports = router;
