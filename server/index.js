const { log } = require("console");
const http=require("http");
const fs=require("fs");

const myServer=http.createServer((req , res)=>{
    // console.log(req);
    // console.log("new req rec");
    
    // create log
    const log=`${Date.now()} : ${req.url}New Req Received \n`
    fs.appendFile("log.txt" , log , (err , data)=>{

        switch(req.url){
            case "/" :res.end("HomePage");
            break;
            case "/about" :res.end("hey i am akshy kothule");
            break;
            default :
            res.end("404 NOT FOUND")

        }

    })
    
});

myServer.listen(8000 , ()=>console.log("Server started !"));
