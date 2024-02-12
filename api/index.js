import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';        //we cannot use .env file inside the backend so for that reason we need to import it
import userRoutes from './routes/user.router.js';
import authRoutes from './routes/auth.router.js';
dotenv.config()

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('connected to database');
})
.catch((err)=>{
    console.log(err);
})
// we use .env file because if we paste the url of mongodb it will show the password
const app = express();

app.use(express.json())             //used to get json data 

app.listen(3000,()=>{
    console.log('listening on port 3000!');
})

app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)

app.use((err,req,res,next)=>{
    const statusCode =  500;
    const message = res.statusMessage || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    })
})