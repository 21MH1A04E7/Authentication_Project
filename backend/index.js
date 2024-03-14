import express from 'express';
import bodyParser from 'body-parser';
import {connecteMongoDb} from './db.js'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user_route.js'
import authRouter from './routes/auth_route.js'

dotenv.config()

const app= express();
app.use(bodyParser.json())
// app.use(express.json())

connecteMongoDb(process.env.MOGOLOCAURL)
.then(()=>{
    console.log('connected to mongodb')
})
.catch(err=>console.log('error connecting',err))

//error middleware
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode ||500;
    const message=err.message||'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode
    })
})
app.use('/api/user',userRouter)
app.use('/api/user',authRouter)


app.listen(8555,()=>{
    console.log('listening on http://localhost//8555')
})