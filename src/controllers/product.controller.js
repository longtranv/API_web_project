const catchAsync = require("../utils/catchAsync");
const Product = require('../models/product')


const createProduct = catchAsync(async (req, res)=>{
    const newProduct = new Product(req.body)

    try {
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    }
    catch(err) {
        res.status(500).json(err)
    }
});

const updateProduct = catchAsync(async(req, res)=>{
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,

            req.body
            ,
            { new: true }
        )
        res.status(200).json(updatedProduct)
    } catch (err) { res.status(500).json(err) }
});

const deleteProduct = catchAsync(async(req, res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product deleted")
    }
    catch (err) {
        res.status(500).json(err)
    }
});

const getProduct = catchAsync(async(req, res)=>{
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    }
    catch (err) {
        res.status(500).json(err)
    }
});

const getAllProduct = catchAsync(async(req, res)=>{
    const qNew = req.query.latest
    const qCat = req.query.category
    try {
        let products;

        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(5)
        } else if (qCat) {
            products = await Product.find({
                categories: {
                    $in: [qCat],
                }
            })
        } else {
            products = await Product.find()
        }

        res.status(200).json(products)
    }
    catch (err) {
        res.status(500).json(err)
    }
});

module.exports ={
    createProduct,
    updateProduct,
    deleteProduct,
    getAllProduct,
    getProduct,
};
