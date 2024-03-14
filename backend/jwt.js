import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const jwtAuthMiddleware=(req,res,next)=>{
    const authorization=req.headers.authorization;
    if(!authorization){
        return res.status(404).json({error:'invalid token'});
    }
    const token=authorization.split(' ')[1];
    if(!token){
        return res.status(401).json({error:'unauthorized'});
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        //req.name=decodedvalue
        req.user=decoded;
        next();
    }catch(err){
        console.log(err);
        return res.status(401).json({error:'invalid token'});
    }
}

//function to get the jwt token

export const generateToken = (userData) => {
    // const expiresIn = 1h; // 1 hour in seconds
    return jwt.sign(userData, process.env.JWT_SECRET, { expiresIn:36000 });
}
