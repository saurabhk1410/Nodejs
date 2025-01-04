//                                                                       ->Import ,Export

// const gg=require("./functions.js")
// import gg from "./functions.js";

// console.log( gg.total(2,6,3));
// console.log( gg.percent(6,12));

//                                                                         ->fs
// import fs from "fs";
// fs.readFile("./notes.tst","utf-8",(err,data)=>{   //asynch
//     if(err) console.log(err);
//     else console.log(data);
// })
// console.log("second");

                                               

// import {readFileSync} from "fs";  //we do this so we don't have to aritw fs.readFileSync everytime   //sync
// const data = readFileSync("./notes.tst","utf-8");
// console.log(data);
// console.log("second");  

// import fs from "fs";
// fs.writeFile("./sample.txt","hii everyone",(err)=>{if(err) throw err;})  //async
// fs.writeFileSync("./sample.txt","bye evryone");

//                                                                      PATH
// import path from "path";
// let a=path.extname("scs/asasx/asdas/adawd/index.js");
// let b=path.basename("scs/asasx/asdas/adawd/index.js");
// let c=path.dirname("scs/asasx/asdas/adawd/index.js");
// let d="6ppid";
// let e=path.join("ecsd/dcds/sdcdsc/scdsdc"+d);
// console.log(a+" "+b+" "+c+"\n"+e);
//                                                                      //OS
// import os from "os";
// console.log(os.freemem());
//                                                                          HTTP
const http=require("http") ;
// http.createServer((request,response,next)=>{ //next->callback fn , not needed right now
// })
const fs=require("fs");

const home=fs.readFileSync("./home.html","utf-8");

const hostname="localhost";
const PORT=4000;

const server=http.createServer((req,res)=>{
    // res.end("working");
    // res.end("<h1>Working</h1>")
    if(req.url==="/"){res.end(home)}
    else if(req.url==="/about"){res.end("<h1>ABOUT PAGE</h1>")}
    else if(req.url==="/contact"){res.end("<h1>CONTACT PAGE</h1>")}
    else {res.end("<h1>Error 404  Page not found</h1>")}
})
server.listen(PORT,hostname,()=>{
    console.log(`server is runnning at https:${hostname}:${PORT}`);
    
})

console.log(__dirname);   //type=module , deos nt work so used reuire
console.log(__filename);   //type=module , deos nt work







