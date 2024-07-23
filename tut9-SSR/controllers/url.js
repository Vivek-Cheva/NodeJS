const shortid = require("shortid")
const URL = require("../models/url")
async function handelshorturl(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error:'url required'})

    const short_id =shortid();
   await URL.create({
        shortid:short_id,
        redirecturl:body.url,
        visithistory:[]
    })
    return res.render('home',{id:short_id})
// return res.json({s_id:short_id})
}

async function handelanalytics(req,res){
const shortid = req.params.shortid
const entry = await URL.findOne({shortid})
return res.json({totalclicked: entry.visithistory.length,
    analytics: entry.visithistory
})
}

module.exports = {
    handelshorturl,
    handelanalytics,
}