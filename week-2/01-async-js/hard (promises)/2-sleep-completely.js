/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (milliseconds) {
    const stratTime = new Date().getTime();

    while(new Date().getTime() - stratTime < (milliseconds)){
        //@dev do nothing to stop the loop.
    }
}
console.log("Start");
sleep(4000);
console.log("End");