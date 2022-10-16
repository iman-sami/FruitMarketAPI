import express from 'express';
import cors from 'cors';
import { PORT } from './config/constant.js';

const app = express()
app.use(cors());
app.listen(PORT,()=>{
    console.log("Connected to Port 5000"||PORT)
})
