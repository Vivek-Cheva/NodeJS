const {v4:uuidv4} = require("uuid")
const User = require("../models/user")
const {setuser,getuser} = require("../service/auth")
async function handeluserlsignup(req,res){
    const {name,email,password} = req.body
    await User.create({
         name,
         email,
         password
    })
    return res.redirect('/')
}
async function handeluserlogin(req,res){
    const {email,password} = req.body
   const user =  await User.findOne({email,password})
   if(!user) return res.render('login',{error:"invalid username or passeord"})

    // const sessionid = uuidv4();
   const token =  setuser(user)
    res.cookie("uid",token)
    return res.redirect('/')
}

module.exports={
    handeluserlsignup,
    handeluserlogin
}