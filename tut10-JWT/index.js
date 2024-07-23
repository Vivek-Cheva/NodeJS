const express = require("express")
const {connecttomongodb} = require('./connection')
const urlroutes = require("./routes/url")
const staticroutes = require("./routes/staticroutes")
const userroutes = require("./routes/user")
const URL = require("./models/url")
const path = require("path")
const cookieparser = require("cookie-parser") 
const app = express();
const {Tologin} = require("./middleware/auth")
connecttomongodb('mongodb://127.0.0.1:27017/urlshortner').then(()=>{console.log("DB connected..")})
app.set("view engine","ejs");
app.set("views",path.resolve("./views"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieparser())

// app.use('/test',async (req,res)=>{
//     const allurls = await URL.find({});
//     return res.render('home',{urls:allurls})
// })
app.use("/",staticroutes)
// making access only to logedin users
app.use("/url",Tologin,urlroutes);
app.use("/user",userroutes)
app.get("/url/:shortid",async (req,res)=>{
    const shortid = req.params.shortid
    const entry = await URL.findOneAndUpdate({shortid},
    {
        $push:{
       visithistory:{
        timestamp: Date.now(),
       },
        },
    }

)
res.redirect(entry.redirecturl)
})
app.listen(8001,()=>{console.log("server started")})