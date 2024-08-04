import productModel from "../../../DB/models/product.model.js";

export const getAll = async(req, res) => {
    try {
       
        const products = await productModel.find();
        return res.status(200).json({ message: "success", products });
    } catch (error) {
        return res.status(400).json({ message: "catch error", error });
    }
}


export const getProduct = async(req, res) => {
    try {
        const { id } = req.params;
        const product = await productModel.findById(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.status(200).json({ message: "success", product });
    } catch (error) {
        return res.status(400).json({ message: "catch error", error });
    }
}



export const AddProduct = async(req, res) => {
    try {
        const { productName, description } = req.body;

        // 1- create:
        const product = await productModel.create({ productName, description });
        /* 2- newModel:
        const product = new productModel({ productName, description });
        await product.save(); */
        /* 3- insertMany
        const product = await productModel.insertMany({ productName, description }); */
        
        return res.status(201).json({ message: "success", product });
    } catch (error) {
        return res.status(500).json({ message: "catch error", error });
    }
}

export const updatProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;

        const product = await productModel.findByIdAndUpdate(
            id, 
            { description: description }, 
            { new: true }
        );

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.status(200).json({ message: "success", product });
    } catch (error) {
        return res.status(500).json({ message: "catch error", error });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productModel.findById(id);
        
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        await productModel.deleteOne({ _id: id });

        return res.status(200).json({ message: "success", product });
    } catch (error) {
        return res.status(500).json({ message: "catch error", error });
    }
}
