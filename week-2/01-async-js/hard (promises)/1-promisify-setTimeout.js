/*
Write a function that returns a promise that resolves after n seconds have passed, 
where n is passed as an argument to the function.
*/
let promise;
function wait(n) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(true);
        },n)
    });
}
//@dev using asyc await.
async function await1(){
    let result = await wait(1000);
    console.log(result);
}
await1();
// @dev using Promises(.then).
//let result = wait(1000);
// result.then(function(result){
//     console.log("Reuslt:", result)
// });