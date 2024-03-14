import express from 'express';
import bodyParser from 'body-parser';
const app= express();
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    return res.send("<h1>hello</h1>")
})

app.listen(8555,()=>{
    console.log('listening on http://localhost//8555')
})