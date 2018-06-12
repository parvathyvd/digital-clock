function clock(){
const fullDate = new Date();
let hours = fullDate.getHours();
let seconds = fullDate.getSeconds();
let minutes = fullDate.getMinutes();

if(hours< 10)
{
    hours = "0" + hours;
}
if(seconds< 10)
{
    seconds = "0" + seconds;
}
if(minutes< 10)
{
    minutes = "0" + minutes;
}

let hourSpan = document.getElementById('hour');
let minuteSpan = document.getElementById('minute');
let secondSpan = document.getElementById('second');

hourSpan.innerHTML = hours;
minuteSpan.innerHTML = ":" + minutes;
secondSpan.innerHTML = ":" + seconds;
}

setInterval(clock, 100);
