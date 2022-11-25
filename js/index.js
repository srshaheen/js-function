//function for display the current day and time
const d = new Date();
const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const p = document.getElementById('demo');

let today = day[d.getDay()];
let hour = d.getHours();
let prepand = (hour > 12) ? "PM" : "AM";

if(hour >= 12){
    hour -= 12;
}

let minute = d.getMinutes();
p.innerHTML = `Today is : ${today} <br> Current Time is: ${hour +' : ' + minute + ' ' + prepand }`;
