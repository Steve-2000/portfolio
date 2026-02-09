const express=require("express")
const router=express.Router()

const{project}=require("../controllers/projectdata")
router.get("/projectDetail",project)

module.exports=router


