const express =  require("express")
const {handeluserlsignup,handeluserlogin} = require("../controllers/user")
const router = express.Router()

router.post('/',handeluserlsignup)
router.post('/login',handeluserlogin)

module.exports = router