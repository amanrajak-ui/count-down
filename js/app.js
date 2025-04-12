const endDate="15 April 2025 4:21 PM";
document.getElementById("end-date").innerText=endDate;
const inputs = document.querySelectorAll("input");

function clcok()
{
    const end = new Date(endDate);
    const now = new Date();
    // console.log(end);
    // console.log(now);
    const diff = (end-now)/1000;
    //console.log(diff);

    if(diff<0)
        return;
   
    
    // now millisecond comes from end-now converted into day , hour, min, sec
    // convert into days
    //console.log(Math.floor(diff/3600/24));
   inputs[0].value= Math.floor(diff/3600/24);
   
   //convert into hours
   inputs[1].value=Math.floor(diff/3600)%24;

   //convert into min
   inputs[2].value=Math.floor(diff/60)%60;

   //convert into sec
   inputs[3].value=Math.floor(diff)%60;


}
clcok();


/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */

setInterval(
    ()=>{
        clcok();
    },1000

)