const mongoose = require("mongoose")

const UrlSchema = new mongoose.Schema({
    shortid:{
        type:String,
        required:true,
        unique:true,
    },
    redirecturl:{
        type:String,
        required:true,
    },
    visithistory:[{timestamp:{type:Number}}],
},
{timestamps:true}
)

const URL = mongoose.model('url',UrlSchema)
module.exports = URL;