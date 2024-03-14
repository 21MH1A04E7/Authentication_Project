import User from '../models/user_model.js'
export const signup=async (req,res)=>{
    try{
        const data=req.body
        const newUser=new User(data)
        const response=await newUser.save();
        res.status(201).json({succse:"created successfully"})
    }
    catch(err){
        console.log('internal server error')
        return res.status(500).json({error:`${err}`})
    }
}