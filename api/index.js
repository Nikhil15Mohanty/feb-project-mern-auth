import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';        //we cannot use .env file inside the backend so for that reason we need to import it
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

app.listen(3000,()=>{
    console.log('listening on port 3000!');
})