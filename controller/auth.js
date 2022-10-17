import  DbConnection  from "../config/Db.js"
import bcrypt from 'bcryptjs'
import { serverError } from "../config/serverError.js"
import { catchAsync } from "../middleware/errorHandlings.js"
import { AddUser } from "../query/user.js"


export const AuthController = {
 Register: catchAsync(async (req,res,next)=>{
    const data = req.body
    const check =`select * from user where email='${data.email}'`
     data.password = bcrypt.hash(data.password,12)
    DbConnection.query(check,(err,results)=>{

        if (err) return next (new serverError(err.message,404));
        if(results>0){
             res.json({
                message:"User Already Exsist!!!"
            })
        }
        DbConnection.query(AddUser(data),(err,results)=>{

            if(err) return next (new serverError(err.message,404))
            res.json({
                message:"User Registered Succesfully",
                statusCode:results.insertId
            })
        })

    })

 }),
 Login: catchAsync(async (Req,res,next)=>{

 }),


}