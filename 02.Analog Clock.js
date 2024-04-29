const hours = document.querySelector(".hrs");
const minutes = document.querySelector(".min");
const seconds = document.querySelector(".sec");
function UpdateTime(){
   const time = new Date();
   const sec = time.getSeconds()/60;
   const min = time.getMinutes()/60;
   const hrs = time.getHours()/12;

   hours.style.setProperty('--rotation',hrs*360);
   minutes.style.setProperty('--rotation',min*360);
   seconds.style.setProperty('--rotation',sec*360)
};
UpdateTime();
setInterval(UpdateTime,1000);