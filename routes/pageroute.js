
const {Router} = require('express')

const route = Router()

route.get('/',(req,res)=>{
    res.render('home')
})
route.get('/chart',(req,res)=>{
    res.render('chart')
})
module.exports = route;