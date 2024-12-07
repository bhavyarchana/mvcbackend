const  express = require("express")

const router = express.Router()

const {createProduct,viewProduct,removeProduct,updateProduct} = require("../controller/productapi")


// Routes
router.post("/",createProduct);
router.get("/",viewProduct);
router.delete("/:id",removeProduct);
router.put("/:id",updateProduct);

module.exports = router;