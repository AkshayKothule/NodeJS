
const fs=require("fs");

//create a file
//sync 
// fs.writeFileSync("./test.txt", "this is a sync file");


//async
// fs.writeFile("./test.txt" , "this is Async file" , (error)=>{})

//read

// sync :- return the value 
// const result=fs.readFileSync("./contacts.txt" , "utf-8")
// console.log(result);


//async : dosesn't return fire call back fn 
// fs.readFile("./contacts.txt" , "utf-8" , (err , result)=>{

//     if(err){
//         console.log("error " , err);
        
//     }else{
//         console.log(result);
        
//     }
// })

fs.appendFileSync("test.txt" , `${Date.now()} hey append file \n`)
// fs.cpSync("test.txt" , "copy.txt")
// fs.unlinkSync("copy.txt")  //delete file

console.log(fs.statSync("test.txt"));