const Productmodel = require("../model/product")


// api to add
const createProduct = async(req,res)=>{
    try {
        await Productmodel(req.body).save()
        res.send({message:"data added"})
    } catch (error) {
        console.log(error)
    }
}

// api to view
const viewProduct = async(req,res)=>{
    try {
        const data =await Productmodel.find()
        res.send({data})
    } catch (error) {
        console.log(error)
    }
}

// api remove
const removeProduct = async(req,res)=>{
    try {
        await Productmodel.findByIdAndDelete(req.params.id)
        res.send({message:"data Delete"})
    } catch (error) {
        console.log(error)
    }
}

// api upate
const updateProduct = async(req,res)=>{
    try {
        await Productmodel.findByIdAndUpdate(req.params.id,req.body)
        res.send({message:"update successfully"});
    } catch (error) {
        console.log(error);
    }
}

module.exports={createProduct,viewProduct,removeProduct,updateProduct}
    