const express =require("express")
const app=express()

const path=require("path")
const cors=require("cors")

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
    methods:["GET", "POST", "PUT", "DELETE"],
}  
))
app.use("/photos",express.static(path.join(__dirname,"/public/photos")))
app.use(express.json())
app.use("/api/project",require("./route/project"))

module.exports=app