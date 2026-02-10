const express =require("express")
const app=express()

const path=require("path")
const cors=require("cors")

// CORS configuration
const allowedOrigins = [
    "https://portfolio-55d37.web.app",
    "https://my-portfolio-frontend-1.web.app",
    process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
    origin: function(origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials:true,
    methods:["GET", "POST", "PUT", "DELETE"],
}));

app.use("/photos",express.static(path.join(__dirname,"/public/photos")))
app.use(express.json())

// Health check endpoint for Render
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Server is running' });
});

app.use("/api/project",require("./route/project"))

module.exports=app