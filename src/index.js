//require('dotenv').config({path: './env'});
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import connectDB from './db/index.js';
//import app from './app.js';

dotenv.config({
    path:  './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`App is listening at port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("Mongodb connection failed: ", err);
})








// connecting to a DB 
// Approach 1 - directly in index.js using IIFE - Immediately Invoked Functions

// (async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error)=>{
//             console.log("ERR: ", error);
//             throw error
//         });

//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);
//         });
//     }
//     catch(err){
//         console.log("Err: ", err);
//         throw err
//     }
// })