const Products = require('../models/productModel');

class ProductService {
    static getProducts(videoID) {
        return Products.find({videoID: videoID});
    }

    static async addProduct(productData) {
        const newProduct = new Products(productData);
        const savedProduct = await newProduct.save();
        return savedProduct;
    }
}

module.exports = ProductService;