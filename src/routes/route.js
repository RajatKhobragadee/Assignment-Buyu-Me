const express=require("express")
const router=express.Router()
const {createInventory,UpdateInventory,getInventry}=require("../controller/productController")

router.post("/product",createInventory)
router.post("/Updateproduct", UpdateInventory)
router.get("/getProduct", getInventry)

router.all("/**",function(req,res){
    return res.status(404).send({status:false,msg:"The Api endpoint you are requesting is not available"})
})

module.exports= router
