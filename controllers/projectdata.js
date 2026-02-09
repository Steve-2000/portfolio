const projectModel=require("../Model/projectModel")


exports.project=(req,res,next)=>{
    projectModel.find()
    .then((data)=>{
        return res.status(200).json({
            success:true,
            data:data
        })
    })

    .catch(err=>{
        return res.status(500).json({
            success:false,
            message:"something went wrong",
            error:err.message
        })
    })
}

exports.addproject=(req,res,next)=>{
    const {title,description,Image,link}=req.body
    const newProject=new projectModel({
        title,
        description,
        Image,  
        link
    })
    newProject.save()
    .then((data)=>{
        return res.status(201).json({   
            success:true,
            message:"Project added successfully",
            data:data
        })
    }
    )
    .catch(err=>{
        return res.status(500).json({
            success:false,
            message:"something went wrong",
            error:err.message
        })
    })  
}