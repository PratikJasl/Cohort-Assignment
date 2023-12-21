// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

import express from 'express';
import fs from 'fs';
const app = express();
let port = 3000;
let content = 'Hi My name is Pratik, I like anime';
fs.writeFile('example.txt',content,'utf8', (err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Data written to file");
})

app.listen(port,()=>{
    console.log("Listening on port 3000");
});