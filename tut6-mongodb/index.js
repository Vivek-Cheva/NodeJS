const express = require("express")
const users = require("./user_data.json")
const mongoose = require("mongoose")

const app = express()
app.use(express.urlencoded({extended:false}))


// creating middleware
app.use((req, res, nxt) => {
    console.log("Hello form middleware")
    nxt()
    // return ends the cycle
    // return res.json({msg:"Hey server you are not allowed"})
})


// connection
mongoose.connect('mongodb://127.0.0.1:27017/tutorial1')
.then(() => console.log("mongodb connected.."))
.catch((err)=>console.log("error occured ",err));


// Schema
const userschema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,

    },
    
},
{timestamps:true},)


// creating a model
const User = mongoose.model("user", userschema);

app.get("/users",async (req, res) => {
    const allusers = await User.find({})
    const html = `<ul>${allusers.map((user) => `<li>${user.firstname}</li>`).join("")}</ul>`
    return res.send(html)
})
app.post("/api/users",async (req,res)=>{
console.log(req.body);
const Body = req.body
const result = await User.create({
    firstname: Body.first_name,
    lastname: Body.last_name,
    email: Body.email,
    gender: Body.gender,
})
console.log(result);

return res.status(201).json({msg:"inserted sucessfully"});
})

// restapis
app.get("/api/users", (req, res) => {
    return res.json(users)
})
app.get("/api/users/:id", async (req, res) => {
    // const id = Number(req.params.id)
    const userid  = await User.findById(req.params.id)
    // const userid  = await User.findByIdAndUpdate(req.params.id,{lastname:"changed_name"})

    // const user = users.find((user) => user.id === id)
    return res.json(userid);
})


app.listen(8000, () => { console.log("server started..") })