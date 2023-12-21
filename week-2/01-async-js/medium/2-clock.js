// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

let second = 0;
let minute = 0;
let hour = 0;
let Meridiem = '';

setInterval(
    function(){
        if(second == 60){
            second = 0;
            minute++;
        }
        second++;
        if(minute == 60){
            minute = 0;
            hour++;
        }
        if(hour == 24){
            hour = 0;
        }   
        if(hour == 12){
            Meridiem = 'PM';
        }
        if(hour == 0){
            Meridiem = 'AM';
        }
        console.log(`${hour}:${minute}:${second} ${Meridiem}`);
    },1000
)


