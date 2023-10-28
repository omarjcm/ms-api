import Product from "../models/products"

export const createProduct = async (req, res) => {
    const {name, category, price, imgURL} = req.body
    const new_product = new Product({name, category, price, imgURL})
    const product_saved = await new_product.save()
    
    res.status(201).json(product_saved)
}

export const getProducts = async (req, res) => {
    const products = await Product.find({})
    res.status(200).json(products)
}

export const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.productId)
    res.status(200).json(product)
}
