import express from 'express';
import bodyParser from 'body-parser';
import {connecteMongoDb} from './db.js'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

const app= express();
app.use(bodyParser.json())

connecteMongoDb(process.env.MOGOLOCAURL)
.then(()=>{
    console.log('connected to mongodb')
})
.catch(err=>console.log('error connecting',err))

app.get('/',(req,res)=>{
    return res.send("<h1>hello</h1>")
})

app.listen(8555,()=>{
    console.log('listening on http://localhost//8555')
})