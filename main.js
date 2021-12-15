let number,display,drop,size,posX,delay,duration;

//  for rain effect
function rain() {
    number = Math.floor(window.innerWidth/5);
    display = document.querySelector("body");
    for(let i=0;i<number;i++)
    {
        drop = document.createElement('i');
        display.appendChild(drop);
        size = Math.random()*5;
        size += 0.2;
        posX = Math.floor(Math.random()*window.innerWidth);
        delay = Math.random()*-20;
        duration = Math.random()*5;
        duration += 2;
        drop.style.width = size+'px';
        drop.style.left = posX+'px';
        drop.style.animationDelay = delay+'s';
        drop.style.animationDuration = duration+'s';
    }
}
rain();

//  for music
let audio = document.createElement("AUDIO");
document.body.appendChild(audio);
audio.src = "src/song.mp3";

document.body.addEventListener("click", function () {
    audio.play();
});
audio.addEventListener("ended",() => audio.play());

// //  for images
let cur = 0;
function slideShow() {
    let images = ["src/1.png","src/2.png","src/3.png","src/4.png","src/5.png","src/6.png","src/7.png","src/8.png",
    "src/9.png","src/10.png","src/11.png","src/12.png","src/13.png","src/14.png","src/15.png"];
    let image = document.querySelector("body");
    image.style.backgroundImage = "url("+images[cur]+")";
    cur = (cur + 1) % images.length;
}
setInterval(slideShow,16000);


