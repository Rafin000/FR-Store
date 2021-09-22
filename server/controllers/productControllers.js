import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";
import { mail } from "../utils/nodeMailer.js";
import { pdf } from "../utils/pdfkit/pdfkit.js";

const getProducts = asyncHandler(async (req, res, next) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const response = await Product.find({ ...keyword });

  res.json(response);
});

const getProductCategory = asyncHandler(async (req, res, next) => {
  const category = req.query.category;

  const response = await Product.find({ category });

  res.json(response);
});

const getProduct = async (req, res, next) => {
  const id = req.params.id;
  // mail(id);
  const response = await Product.findById(id);

  res.json(response);
};

const postProduct = asyncHandler(async (req, res, next) => {
  const {
    name,
    brandImage,
    image,
    brand,
    price,
    category,
    description,
    countInStock,
  } = req.body;

  const product = new Product({
    name,
    brandImage,
    image,
    brand,
    price,
    category,
    description,
    countInStock,
    user: req.user,
  });

  const createProduct = await product.save();
  res.status(201).json(createProduct);
});

const deleteProduct = asyncHandler(async (req, res, next) => {
  const productId = await Product.findById(req.params.id);
  if (productId) {
    await productId.remove();
    res.json({ message: "Product Removed" });
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }
});

const editProduct = asyncHandler(async (req, res, next) => {
  const { name, image, brand, price, category, countInStock, description } =
    req.body;
  const productId = req.params.id;
  const product = await Product.findById(productId);

  if (product) {
    product.name = name;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.price = price;
    product.countInStock = countInStock;
    product.description = description;
  } else {
    res.status(404);
    throw new Erorr("Product Not Found");
  }
  const updatedProduct = await product.save();
  // const prod = await Product.findByIdAndUpdate(productId, {
  //   name: req.body.name,
  // });
  res.status(201).json(updatedProduct);
});
export {
  getProducts,
  getProductCategory,
  postProduct,
  getProduct,
  editProduct,
  deleteProduct,
};
