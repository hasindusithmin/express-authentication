
const {Router} = require('express')

const route = Router()

route.get('/',(req,res)=>{
    res.render('home')
})
route.get('/chart',(req,res)=>{
    res.render('chart')
})
route.get('/signup',(req,res)=>{
    res.render('signup')
})
route.get('/signin',(req,res)=>{
    res.render('signin')
})
module.exports = route;