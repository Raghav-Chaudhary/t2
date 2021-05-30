const express = require('express')
const app = express()
const port = 3001

app.get("/number", function(req,res){
    res.send("Go to /number/:num to check if :num is odd or even")
})

app.get("/number/:num", function (req,res){
    const num = parseInt(req.params["num"])
    if(num.toString()!=="NaN"){
        res.send(`The number ${num} is ${num%2===0?"even":"odd"}`)
    }else{
        res.send("Invalid request")
    }
    
})



app.listen(port)