import express from 'express';
import mongoose from 'mongoose';
import data from './data.js'
import Cors from 'cors'


const app=express();
const port=process.env.PORT||8000;
const connection_url='mongodb+srv://admin:mcaoavs9MgbZTgG4@cluster0.5mwzm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


app.use(express.json())
app.use(Cors())
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    // useCreateIndex:true,
    // useUnifiedTopology: true,

});
// app.use(cors)

app.get('/',(req,res)=>res.status(200).send("hello"))
app.post('/a',(req,res)=>{
    const Data=req.body;
    data.create(Data,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })


})
app.get('/a',(req,res)=>{
    data.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    })


})


app.listen(port, ()=>console.log(`listening on localhost:${port}`));
