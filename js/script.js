
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const seconds = document.querySelector(".seconds");

let date_now = new Date();
let hr = date_now.getHours();
let min = date_now.getMinutes();
let sec = date_now.getSeconds();

console.log(hr);

let set_clock = setInterval(()=>{
let date_now = new Date();
let hr = date_now.getHours();
let min = date_now.getMinutes();
let sec = date_now.getSeconds();
let hr_calc = (hr * 30)+ (min/2);
let min_calc = (min * 6 )+ (sec/10);
let sec_calc = sec * 6;
hour.style.transform = `rotate(${hr_calc}deg)`;
minute.style.transform = `rotate(${min_calc}deg)`;
seconds.style.transform = `rotate(${sec_calc}deg)`;
}, 1000)

const progress = document.querySelector('.progress-bar');

window.addEventListener('scroll', ()=>{
    const winScroll = window.scrollY;
   const height = document.documentElement.scrollHeight - window.innerHeight;
   const scrolled = (winScroll/height) * 100;
   progress.style.width = `${scrolled}%`
   
})



const toUp = document.querySelector(".to-up");

window.addEventListener("scroll", ()=>{
    if(window.scrollY>200){
        toUp.classList.add("upActive");
    }
    else{
        toUp.classList.remove("upActive")
    }
})
