import User from '../models/user_model.js'
import {errorHandler} from '../utils/error.js'
export const signup=async (req,res,next)=>{
    try{
        const data=req.body
        const newUser=new User(data)
        const response=await newUser.save();
        res.status(201).json({succse:"created successfully"})
    }
    catch(err){
        console.log('internal server error')
        next(err)
    }
}