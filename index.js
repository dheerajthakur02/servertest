import express from "express"

const app=express();
const port=9000;

app.listen("9000",()=>{
    console.log(`starting server on port ${port}`)
})

app.use("/",(req,res)=>{
    res.send("server is working")
})