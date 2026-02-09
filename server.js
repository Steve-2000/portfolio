const app =require("./app.js")
const dotenv=require("dotenv")
const path=require("path")
const databasecon=require("./connectMongo/connectdb")

dotenv.config({path:path.join(__dirname,"./config.env")})
databasecon()

const PORT=process.env.PORT || 8000;

const server=app.listen(PORT,()=>{
    console.log(`server connected successfully and run port ${PORT}`)
})
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to Unhandled Promise Rejection');
    server.close(() => {
        process.exit(1);
    });
})
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to Uncaught Exception');
    server.close(() => {
        process.exit(1);
    });
});




