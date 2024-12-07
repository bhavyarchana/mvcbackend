const mongoose= require("mongoose");

var productSchema = mongoose.Schema({
    name:String,
    category:String,
    price:Number,
    count:Number,
    description:String
});

var Productmodel = mongoose.model("product",productSchema);
module.exports = Productmodel;