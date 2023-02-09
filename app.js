const express = require('express');
const dotenv = require('dotenv');

const app = express()
dotenv.config()

app.get("/",(req,res)=>{

    res.send("Welcome Azure")
})

port =process.env.PORT

app.listen(port,()=>{

    console.log("I am listening, sir, are you listening ?  !"+port)
})