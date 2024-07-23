const mongoose = require("mongoose")

async function connecttomongodb(url){
    mongoose.connect(url)
}
module.exports = {
    connecttomongodb,
}