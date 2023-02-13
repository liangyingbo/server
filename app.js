const express = require('express')
const { resolve } = require('path')
const fs = require('fs')
const app = express()


app.use('*',(req,res,next) =>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-methods','GET,POST')
    next()
})

app.get('/image/:filename',(req,res) =>{
    res.sendFile(resolve(__dirname ,"./images/" + req.params.filename))
})

app.get('/imgs',(req,res)=>{
    res.send(JSON.parse(fs.readFileSync('./data.json','utf-8')))
})

app.get('/test',(req,res) =>{
    res.send({
        name:'张三',
        age:12,
        gender:'男'
    })
})

app.get('/imgs',(req,res) =>{
    res.send()
})

app.listen('3000',()=>{
    console.log('server run at 3000')
})