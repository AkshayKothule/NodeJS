
const fs=require("fs");

// console.log("1");

// //blocking req :- sync 
// const result=fs.readFileSync("contacts.txt" , "utf-8");
// console.log(result);

// console.log("2");
// console.log("3");

console.log("1");

//non blocking req :- async 
fs.readFile("contacts.txt" , "utf-8" , (err , result)=>{
    if(err){
        console.log("error" , err);
        
    }else{
        console.log(result);
        
    }
});


console.log("2");
console.log("3");


