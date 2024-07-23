const express = require("express")
const users = require("./user_data.json")

const app  = express()

// creating middleware
app.use((req,res,nxt)=>{
    console.log("Hello form middleware")
   nxt()
    // return ends the cycle
 // return res.json({msg:"Hey server you are not allowed"})
})



app.get("/users",(req,res)=>{
    const html = `<ul>${users.map((user)=>`<li>${user.first_name}</li>`).join("")}</ul>`
    return res.send(html)
})

// restapis
app.get("/api/users",(req,res)=>{
    return res.json(users)
})
app.get("/api/users/:id",(req,res)=>{
    const id = Number(req.params.id)
    const user = users.find((user)=>user.id===id)
    return res.json(user);
})
app.listen(8000,()=>{console.log("server started..")})