import Db, { DbConnection } from "../config/Db";
import {AddFruit,searchFruit,viewAllFruit} from "../query/fruits.js"
import serverError from "/config/serverError.js"
import { catchAsync } from "../middleware/errorHandlings.js"

const FruitController = {

    addFruit: catchAsync (async (req,res,next)=>{
    const data = req.body
     Db.query(AddFruit(),data,(err,results)=>{
        if (err) next (new serverError(err.message,404))
        res.json({message:"fruit Added"})
     })
    }),

    viewFruit:catchAsync(async (req,res,next)=>{
        Db.query(viewAllFruit(),(err,results)=>{
            if (err) next (new serverError(err.message,404))
        res.json(results)
        })
    })

}