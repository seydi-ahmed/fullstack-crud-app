// products.controller.js

const db = require("../models");
const Product = db.product;

exports.create = async (req, res) => {
  try {
    const product = await Product.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      userId: req.userId
    });
    
    res.send(product);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const products = await Product.findAll({
      where: { userId: req.userId }
    });
    res.send(products);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: {
        id: req.params.id,
        userId: req.userId
      }
    });
    
    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }
    
    res.send(product);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await Product.update(req.body, {
      where: {
        id: req.params.id,
        userId: req.userId
      }
    });
    
    if (updated) {
      const updatedProduct = await Product.findByPk(req.params.id);
      res.send(updatedProduct);
    } else {
      res.status(404).send({ message: "Product not found" });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Product.destroy({
      where: {
        id: req.params.id,
        userId: req.userId
      }
    });
    
    if (deleted) {
      res.send({ message: "Product was deleted successfully!" });
    } else {
      res.status(404).send({ message: "Product not found" });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};