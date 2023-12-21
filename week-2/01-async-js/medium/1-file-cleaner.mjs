// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.
// After the program runs, the output should be

import express from 'express';
import fs from 'fs';
const app = express();
let port = 3000;
let fileData = '';

    fs.readFile('example.txt','utf8', (err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("Data is:", data);
        fileData = data;
        fileData = fileData.replace(/\s+/g, ' ');
        console.log('After Trim:',fileData);
        WriteFile(fileData);
    })

async function WriteFile(data){
    fs.writeFile('example.txt',data,'utf8', (err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("Data written to file");
    })
}


app.listen(port,()=>{
    console.log("Listening on port 3000");
});