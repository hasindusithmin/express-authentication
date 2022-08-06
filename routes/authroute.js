require('dotenv').config()
const supabase = require('../config/supabase')
const {Router} = require('express')
const jwt = require('jsonwebtoken')

const route = Router()

route.post("/signup",async(req,res)=>{

    try {
        const {email,password} = req.body;
        const { user, session, error } = await supabase.auth.signUp({email,password})
        if (error) throw error
        const token = jwt.sign({id:user.id},process.env.SECRET,{expiresIn:3600})
        res.cookie("token",token,{httpOnly:true,maxAge:3600*1000})
        res.sendStatus(200)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

route.post("/signin",async(req,res)=>{
    try {
        const {email,password} = req.body;
        const { user, session, error } = await supabase.auth.signIn({email,password})
        if (error) throw error
        const token = jwt.sign({id:user.id},process.env.SECRET,{expiresIn:3600})
        res.cookie("token",token,{httpOnly:true,maxAge:3600*1000})
        res.sendStatus(200)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

route.get("/signout",async(req,res)=>{
    try {
        const { error } = await supabase.auth.signOut()
        if (error) throw error
        res.cookie("token",'',{maxAge:1})
        res.sendStatus(202)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

module.exports = route;