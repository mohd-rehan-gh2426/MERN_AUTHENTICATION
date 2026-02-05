import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js"
import connectDB from "./database/db.js";
import cors from 'cors'

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))

app.use('/user', userRoute)

await connectDB();
app.listen(PORT,()=>{
    
    console.log(`Server is listening at port ${PORT}`);  
})