import http from "http";
import fs from "fs";

const homePage=fs.readFileSync("./index.html","utf-8");

const serve=http.createServer((req,res)=>{
    if(req.url=="/")
    {
        res.end(homePage)
    }
    else if(req.url=="/contact")
    {
        res.end("<h1>Contact Page</h1>")
    }
    else
    {
        res.end("<h1>Invalid URL</h1>")
    }
})

serve.listen(4000,(req,res)=>{
    console.log("server is running...");
})
