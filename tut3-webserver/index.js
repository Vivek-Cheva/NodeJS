const http = require('http')
const url = require("url")

const myserver = http.createServer((req,res)=>{
    console.log("new req received");
    // true makes query paramaters as objeect;
    let myurl = url.parse(req.url,true)
    console.log(myurl);
    switch(myurl.pathname){
        case '/':
            res.end(`Hello ${myurl.query.name}`);
            break;
        case '/about':
            res.end("about page");
            break;
        default:
            res.end("404 NOT FOUND");
        
    }
    // res.end("Hello from server");
});

myserver.listen(8000,()=> console.log("server started!!"));