import fs from "fs"
import http from "http"

const host="localhost";
const port=2000;

const home=fs.readFileSync("./home.html","utf-8");
const contact=fs.readFileSync("./contact.html","utf-8");
const error=fs.readFileSync("./error.html","utf-8");

const server=http.createServer((req,res,err)=>{
    const url=req.url;
    if(err) 
    {
        throw err;
    }
    if(url==="/") res.end(home);
    if(url==="/contact") res.end(contact);
    else res.end(error)

    
})

server.listen(port,host,()=>{
    console.log(`server is working at http://${host}:${port}`);
});


