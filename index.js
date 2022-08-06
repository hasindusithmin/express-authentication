
const express = require('express')
const authRoute = require('./routes/authroute')


const app = express()
//regiter the authroutes
app.use('/auth',authRoute)

//root url
app.get('/',(req,res)=>{
    res.sendStatus(200)
})

app.listen(3000,()=>{
    console.log('server run on port:3000');
})
