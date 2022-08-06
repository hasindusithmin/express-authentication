require('dotenv').config()
const jwt = require('jsonwebtoken')
const supabase = require('../config/supabase')

const requireAuth = (req,res,next)=>{
    const token = req.cookies.token;
    if (token) {
        jwt.verify(token,process.env.SECRET,(err,decodeToken)=>{
            if (err) res.redirect('/signin')
            else {
                next()
            }
        })
    }
    else res.redirect('/signin')
}

const checkUser = (req,res,next)=>{
    const token = req.cookies.token;
    if (token) {
        jwt.verify(token,process.env.SECRET,(err,decodeToken)=>{
            if (err) next()
            else {
                res.locals.user = decodeToken.id;
                next()
            }
        })
    }
    else next()
}


module.exports = {requireAuth,checkUser}