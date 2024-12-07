// improting
const  express = require('express')
const dotenv =require("dotenv")
const Productroutes = require("./routes/productroutes")

// initialize
const app = express()
dotenv.config()
require("./config/database")

// mid
app.use (express.json());

// useroutes
app.use("/api/product",Productroutes)

// port setting
const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`port is Running ${PORT}`);
})