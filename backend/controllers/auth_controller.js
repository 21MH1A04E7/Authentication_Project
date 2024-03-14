import User from '../models/user_model.js'
import bcryptjs from 'bcryptjs'
import {errorHandler} from '../utils/error.js'
import {generateToken} from '../jwt.js'

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

export const signin=async (req,res,next)=>{
    const {email,password}=req.body
    try{
        const validUser=await User.findOne({email});
        if(!validUser) return next(errorHandler(404, "User not found"));
        const isMatch=bcryptjs.compareSync(password,validUser.password);
        if(!isMatch) return next(errorHandler(401,"wrong credentials"));
        const payload={id:validUser.id}
        const token=generateToken(payload)
        //removing password
        const {password:hashedPassword,...rest}=validUser._doc
        console.log(token)
        res.cookie('access_token',token,{httpOnly:true}).status(200).json({token:token,user:rest})
    }
    catch(err){
        next(err)
    }
}