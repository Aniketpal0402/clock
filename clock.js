

function clock(){
    let time=new Date();

    const secondhand=document.getElementById("second");
    const minutehand=document.getElementById("minute");
    const hourhand=document.getElementById("hour");

    let second=time.getSeconds()/60;
    let minute=(second+time.getMinutes())/60;
    let hour=(minute+time.getHours())/12;

    secondhand.style.transform=`translatex(-50%) rotate(${second*360}deg)`;
    minutehand.style.transform=`translate(-50%) rotate(${minute*360}deg)`;
    hourhand.style.transform=`translate(-50%) rotate(${hour*360}deg)`;

}
clock();
setInterval(clock,1000);