const express = require("express")
const userRoutes = require("./routes/user")
const {connectMongoDB} = require("./connection")
const app = express()

app.use(express.urlencoded({extended:false}))

connectMongoDB('mongodb://127.0.0.1:27017/tutorial1')



app.use("/user",userRoutes)

app.listen(8000, () => { console.log("server started..") })