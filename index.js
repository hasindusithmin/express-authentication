
const express = require('express')

const app = express()

//root url
app.get('/',(req,res)=>{
    res.sendStatus(200)
})

app.listen(3000,()=>{
    console.log('server run on port:3000');
})
