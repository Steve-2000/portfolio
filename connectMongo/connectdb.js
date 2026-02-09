const mongoose =require("mongoose")

const connectdb=()=>{
    mongoose.connect(process.env.mongoatlas_url)
    .then((con)=>{
        console.log(`mongodb atlas connected successfully ${con.connection.host}`)
    }
    
    )
    .catch((err)=>{
        console.log(err.message)
    })
}

module.exports=connectdb