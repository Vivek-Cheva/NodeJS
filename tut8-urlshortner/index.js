const express = require("express")
const {connecttomongodb} = require('./connection')
const urlroutes = require("./routes/url")
const URL = require("./models/url")
const app = express();

connecttomongodb('mongodb://127.0.0.1:27017/urlshortner').then(()=>{console.log("DB connected..")})
app.use(express.json())
app.use("/url",urlroutes);
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