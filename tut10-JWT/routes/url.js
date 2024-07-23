const express = require("express")
const {handelshorturl,handelanalytics} = require("../controllers/url")
const router = express.Router()


router.post('/',handelshorturl)
router.get('/analytics/:shortid',handelanalytics)

module.exports=router