
const express = require('express')
const authRoute = require('./routes/authroute')
const pageroute = require('./routes/pageroute')
const {checkUser} = require('./middleware/authmiddleware')
const cookieParser = require('cookie-parser')
const app = express()



//set view engine(ejs)
app.set('view engine','ejs')
//middleware for parse application/json
app.use(express.json())
//middleware for work with cookie
app.use(cookieParser())
//middleware for check user
app.use('*',checkUser)
//regiter the pageroute
app.use(pageroute)
//regiter the authroutes
app.use('/auth',authRoute)


//root url
app.get('/',(req,res)=>{
    res.sendStatus(200)
})

app.listen(3000,()=>{
    console.log('server run on port:3000');
})
