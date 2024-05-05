const express=require("express")
const router=express.Router()
const authcontroller=require("../controller/authcontroller")
const {authMiddleware} = require("../middleware/authmiddleware");




router.post("/register",authcontroller.register)
router.post("/login",authcontroller.login)
router.put("/changePassword",authMiddleware,authcontroller.changePassword)



module.exports=router
