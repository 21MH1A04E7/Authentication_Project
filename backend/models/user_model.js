import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true});

userSchema.pre('save',async function (next){
    const user=this
    if(!user.isModified('password')) return next()
    try{
        const salt=await bcryptjs.genSalt(10)
        const hashedPassword=await bcryptjs.hash(user.password,salt)
        user.password=hashedPassword
        next()
    }
    catch(err){
        return next(err)
    }
})

const User=mongoose.model('User',userSchema)
export default User