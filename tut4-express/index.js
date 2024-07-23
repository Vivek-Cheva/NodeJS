const express = require("express")
const app = express()
// app is a http handler
app.get('/', (req, res) => {
    res.send("hello from home page..");
})


app.get('/about', (req, res) => {
    res.send("i'm about page.." + `hello ${req.query.name}`);
})


app.listen(8000,()=>{console.log("server started with express..")})

// const myserver = http.createServer(app);

// myserver.listen(8000, () => console.log("server started!!"));