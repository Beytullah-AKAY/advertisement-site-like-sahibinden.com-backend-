const express=require("express")
const router=express.Router()
const authroutes=require("./authroutes")
const advertroutes=require("./advertroutes")



router.use("/auth",authroutes)
router.use("/advert",advertroutes)

module.exports=router