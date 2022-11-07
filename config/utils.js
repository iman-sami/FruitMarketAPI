import jwt from 'jsonwebtoken';
import {JWTSECRET,JWTEXPIRE} from './constant.js';


const sendToken = (id)=>{
  return jwt.sign({id:id},JWTSECRET,{
    expiresIn:JWTEXPIRE
  })

}

export const createToken = (users,results,res) => {

    const token = sendToken(results.insertId)
     return res.json({
        message:"Success",
        statusCode:200,
        token:token,
        users
     })
}