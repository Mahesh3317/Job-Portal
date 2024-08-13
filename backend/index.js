// const express = require('express')
import express from "express";
import cookieParser from "cookie-parser";
// import cors from "cors";

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


const PORT = 3000;
app.listen(PORT,()=>{
    console.log('Server running at port ${PORT}')
})