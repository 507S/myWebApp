const express = require('express');

const app = express()

app.get("/",(req,res)=>{

    res.send("Welcome Azure")
})


app.listen(2136,()=>{

    console.log("I am listening, sir !")
})