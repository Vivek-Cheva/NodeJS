const express = require("express")
const router = express.Router()

const {handlegetallusers,handlegetuserbyid,handlepostusers} = require("../controllers/user.js")
// router.get("/users",async (req, res) => {
//     const allusers = await User.find({})
//     const html = `<ul>${allusers.map((user) => `<li>${user.firstname}</li>`).join("")}</ul>`
//     return res.send(html)
// })

// app.use(express.urlencoded({extended:false}))



router.post("/",handlepostusers)
router.get("/", handlegetallusers)
router.get("/:id",handlegetuserbyid)

module.exports = router;

