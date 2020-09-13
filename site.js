const deg = 6;

const hrs = document.querySelector('.hr');
const min = document.querySelector('.mn');
const sec = document.querySelector('.sc');

setInterval(() => {
    let day = new Date();

    let hours = day.getHours() * 30;
    let minutes = day.getMinutes() * deg;
    let seconds = day.getSeconds() * deg;

    hrs.style.transform = `rotateZ(${(hours) + (minutes / 12)}deg)`;
    min.style.transform = `rotateZ(${minutes}deg)`;
    sec.style.transform = `rotateZ(${seconds}deg)`;
});

