//  setInterval(showTime, 1000);
//         function showTime() {
//             let time = new Date();
//             let hour = time.getHours();
//             let min = time.getMinutes();
//             let sec = time.getSeconds();
//             am_pm = "AM";
 
//             if (hour > 12) {
//                 hour -= 12;
//                 am_pm = "PM";
//             }
//             if (hour == 0) {
//                 hr = 12;
//                 am_pm = "AM";
//             }
 
//             hour = hour < 10 ? "0" + hour : hour;
//             min = min < 10 ? "0" + min : min;
//             sec = sec < 10 ? "0" + sec : sec;
 
//             let currentTime = hour + ":"
//                 + min + ":" + sec + am_pm;
 
//             document.getElementById("clock")
//                 .innerHTML = currentTime;
//         }
 
//         showTime();



function clockInit(){
    var date = new Date();
    var time = [date.getHours(), date.getMinutes(), date.getSeconds()];
    var clockDivs = [document.getElementById("hour"), document.getElementById("min"), document.getElementById("sec")];
    
    var hour = time[1]/2+time[0]*30;
    
    clockDivs[0].style.transform="rotate("+ hour +"deg)";
    clockDivs[1].style.transform="rotate("+ time[1]*6 +"deg)";
    clockDivs[2].style.transform="rotate("+ time[2]*6 +"deg)";
}
clockInit();