const mongoose = require("mongoose")


const educationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    Image: [{
        image: {
            type: String,
            required: true
        }
    }
    ],
   
    createdAt: {
        type: Date,
        default: Date.now
    },
    Highlight:{
        type: String,
        required: true
    }





})
const educationModel=mongoose.model("education",educationSchema)
module.exports=educationModel