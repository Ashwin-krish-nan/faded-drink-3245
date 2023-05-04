const express=require('express')
const {connection}=require("./config/mongo.db")
const {userRouter}=require("./routers/user.router")

const cors = require('cors')
require('dotenv').config()
const app=express()
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Base Endpoint Of API")
})

app.use("/user",userRouter);


app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("Connected to the db")
    } catch (error) {
        console.log(error)
    }
    console.log(`Listening on port ${process.env.port}`)
})