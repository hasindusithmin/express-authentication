require('dotenv').config()
const jwt = require('jsonwebtoken')

const requireAuth = (req,res,next)=>{
    const token = req.cookies.token;
    if (token) {
        jwt.verify(token,process.env.SECRET,(err,decodeToken)=>{
            if (err) res.redirect('/')
            else {
                console.log(decodeToken);
                next()
            }
        })
    }
    else res.redirect('/')
}