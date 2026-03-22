require('dotenv').config()

console.log("Learning Backend");
const express=require('express')
//another way of writing import express from "express"
const app=express()

const port=4000

app.get('/',(req,res)=>{
    res.send('Hello World! how are you ')
})
app.get('/twitter',(req,res)=>{
    res.send('jayatishubhangee.com')
})
app.get('/login',(req,res)=>{
res.send('<h1>click the login button for succesful login!</h1>')
})
app.get('/navratri',(req,res)=>{
res.send('happy navratri to all')
})
app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`)
})