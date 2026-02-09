const mongoose = require("mongoose")


const projectSchema = new mongoose.Schema(
    {
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
    technologies: [{
        type: String
    }],
    link: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }





})
const projectModel=mongoose.model("project",projectSchema)
module.exports=projectModel