import  DbConnection  from "../config/Db.js"
import bcrypt from 'bcryptjs'
import { serverError } from "../config/serverError.js"
import { catchAsync } from "../middleware/errorHandlings.js"
import { AddUser,getuser } from "../query/user.js"
import { createToken } from "../config/utils.js"


export const AuthController = {
 register: catchAsync(async (req,res,next)=>{
    const data = req.body
    const checkData = `select * from user where email = '${data.email};'`
    data.password = await bcrypt.hash(data.password,12)
    DbConnection.query(checkData,(err,result)=>{
        if(err) return next (new serverError(err.message,404))
        if(result>0){
            return next(new serverError("User Already Exsist ",404))
        }
      
        DbConnection.query(AddUser(),data,(err,results)=>{
            if(err) return new (serverError(err.message,404))
            const users = results[0]
            createToken(users,results,res)
        })
    })

 }),

 // login

 login: catchAsync(async (req,res,next)=>{
   
    const data = req.body
    const checkuser = `select * from user where email = '${data.email};'`

    DbConnection.query(checkuser,async (err,results)=>{
        if(err) return next(new serverError(err.message,404))
        if(results == 0 ) return next (new serverError("User not Registered!"))

         let correctpass = await bcrypt.compare(data.password,results[0].password)
        if(!correctpass) return next ("password doesn't match",404)
        createToken(results[0],results,res)
    })


 })

}