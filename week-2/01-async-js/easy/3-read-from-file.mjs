// ## Reading the contents of a file
// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 


import express from 'express';
import fs from 'fs';
const app = express();
let port = 3000;

fs.readFile('example.txt','utf8', (err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Data is:", data);
})

console.log("1st thing");

app.listen(port,()=>{
    console.log("Listening on port 3000");
});