import express from 'express';
import cors from 'cors';
import { PORT } from './config/constant.js';
import  DbConnection from './config/Db.js';
const app = express()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded())

DbConnection.connect((err)=>{
    if (err) return console.log(err.message)

    console.log("Connected To DB")
})
app.listen(PORT,()=>{
    console.log(`Connected to Port ${PORT}`)
})
