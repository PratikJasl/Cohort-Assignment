/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(true);
        }, 1000)
    })
}

function waitTwoSecond() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(true);
        }, 2000)
    })
}

function waitThreeSecond() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(true);
        }, 3000)
    })
}

function calculateTime() {
    let totaltime1;
    let totaltime2;
    let totaltime3;
    const stratTime = new Date().getTime();
    waitOneSecond().then((result)=>{
        const endTime = new Date().getTime();
        totaltime1 = endTime-stratTime;
        console.log(result);
    })
    waitTwoSecond().then((result)=>{
        const endTime = new Date().getTime();
        totaltime2 = endTime-stratTime;
        console.log(result);
    })
    waitThreeSecond().then((result)=>{
        const endTime = new Date().getTime();
        totaltime3 = endTime-stratTime;
        console.log(result);
        console.log("Total Time:", totaltime1+totaltime2+totaltime3);
    })
    
}
calculateTime();