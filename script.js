/*====================================================
PART 4
script.js
Loader + PIN + Hero + Scroll + Music
====================================================*/


//===============================
// LOADER
//===============================

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

document.getElementById("loader").style.visibility="hidden";

},2500);

});


//===============================
// PIN
//===============================

const correctPin="0907"; // CHANGE HERE

const unlock=document.getElementById("unlockBtn");

const input=document.getElementById("pinInput");

const error=document.getElementById("pinError");

unlock.onclick=()=>{

if(input.value===correctPin){

document.getElementById("pinPage").style.display="none";

document.getElementById("hero").scrollIntoView({

behavior:"smooth"

});

welcomeAnimation();

}

else{

error.innerHTML="Wrong PIN ❤️";

error.style.color="#ff5b97";

input.value="";

shakePin();

}

}


//===============================
// SHAKE
//===============================

function shakePin(){

input.animate([

{

transform:"translateX(-10px)"

},

{

transform:"translateX(10px)"

},

{

transform:"translateX(-10px)"

},

{

transform:"translateX(10px)"

},

{

transform:"translateX(0)"

}

],{

duration:450

});

}



//===============================
// HERO
//===============================

const start=document.getElementById("startBtn");

start.onclick=()=>{

document.getElementById("gallery")

.scrollIntoView({

behavior:"smooth"

});

}



//===============================
// WELCOME CONFETTI
//===============================

function welcomeAnimation(){

for(let i=0;i<100;i++){

let c=document.createElement("div");

c.className="confetti";

c.style.left=Math.random()*100+"vw";

c.style.background=

`hsl(${Math.random()*360},100%,60%)`;

c.style.animationDuration=

2+Math.random()*3+"s";

document.body.appendChild(c);

setTimeout(()=>{

c.remove();

},5000);

}

}



//===============================
// MUSIC
//===============================

const music=document.getElementById("music");

const play=document.getElementById("playMusic");

let playing=false;

play.onclick=()=>{

if(!playing){

music.play();

play.innerHTML="Pause Music ⏸";

playing=true;

}

else{

music.pause();

play.innerHTML="Play Music ▶";

playing=false;

}

}



//===============================
// PARALLAX
//===============================

window.addEventListener("mousemove",(e)=>{

let x=e.clientX/window.innerWidth;

let y=e.clientY/window.innerHeight;

document.querySelector(".aurora").style.transform=

`translate(${x*40}px,${y*40}px)`;

});



//===============================
// PHOTO HOVER
//===============================

document.querySelectorAll(".photo-grid img")

.forEach(img=>{

img.onclick=()=>{

openImage(img.src);

}

});



//===============================
// LIGHTBOX
//===============================

const viewer=document.createElement("div");

viewer.id="viewer";

viewer.innerHTML=`

<img id="viewerImg">

`;

document.body.appendChild(viewer);

function openImage(src){

viewer.style.display="flex";

document.getElementById("viewerImg").src=src;

}

viewer.onclick=()=>{

viewer.style.display="none";

}



//===============================
// LETTER
//===============================

document.querySelector(".envelope")

.onclick=()=>{

document.getElementById("letter")

.style.display="block";

document.getElementById("letter")

.scrollIntoView({

behavior:"smooth"

});

}



//===============================
// SCROLL REVEAL
//===============================

const reveal=document.querySelectorAll(

"section"

);

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

reveal.forEach(el=>{

observer.observe(el);

});



//===============================
// HEARTS
//===============================

setInterval(()=>{

let heart=document.createElement("span");

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=

5+Math.random()*5+"s";

document.querySelector(".hearts")

.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

},350);



//===============================
// CURSOR GLOW
//===============================

const glow=document.createElement("div");

glow.id="cursorGlow";

document.body.appendChild(glow);

window.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});



//===============================
// AUTO SCROLL TITLE
//===============================

let title=document.title;

setInterval(()=>{

document.title=

document.title=="❤️ Happy Birthday ❤️"

?title

:"❤️ Happy Birthday ❤️";

},1800);
/*====================================================
PART 5
Advanced Animation
Fireworks + Balloons + Cake + Typewriter
====================================================*/


//===============================
// CAKE
//===============================

const blowBtn=document.getElementById("blowBtn");
const cutBtn=document.getElementById("cutBtn");
const flame=document.querySelector(".flame");

blowBtn.onclick=()=>{

flame.style.opacity="0";

blowBtn.innerHTML="✨ Wish Made";

createSmoke();

fireworks();

}

cutBtn.onclick=()=>{

document.getElementById("cake")

.animate([

{

transform:"scale(1)"

},

{

transform:"rotate(-2deg)"

},

{

transform:"rotate(2deg)"

},

{

transform:"scale(.95)"

},

{

transform:"scale(1)"

}

],{

duration:800

});

confettiBurst();

}



//===============================
// SMOKE
//===============================

function createSmoke(){

for(let i=0;i<15;i++){

let smoke=document.createElement("div");

smoke.className="smoke";

smoke.style.left=

50+Math.random()*20-10+"%";

smoke.style.animationDuration=

2+Math.random()+"s";

document.getElementById("cake")

.appendChild(smoke);

setTimeout(()=>{

smoke.remove();

},3000);

}

}



//===============================
// FIREWORKS
//===============================

function fireworks(){

for(let j=0;j<8;j++){

setTimeout(()=>{

firework();

},j*350);

}

}



function firework(){

let x=Math.random()*window.innerWidth;

let y=Math.random()*window.innerHeight/2;

for(let i=0;i<60;i++){

let p=document.createElement("div");

p.className="fire";

document.body.appendChild(p);

let angle=Math.random()*360;

let dist=80+Math.random()*140;

p.style.left=x+"px";

p.style.top=y+"px";

p.style.background=

`hsl(${Math.random()*360},100%,60%)`;

p.animate([

{

transform:"translate(0,0) scale(1)",

opacity:1

},

{

transform:

`translate(${Math.cos(angle)*dist}px,

${Math.sin(angle)*dist}px)

scale(0)`,

opacity:0

}

],{

duration:1500

});

setTimeout(()=>{

p.remove();

},1500);

}

}



//===============================
// BALLOONS
//===============================

function balloons(){

for(let i=0;i<30;i++){

let b=document.createElement("div");

b.className="balloon";

b.style.left=Math.random()*100+"vw";

b.style.background=

`hsl(${Math.random()*360},90%,65%)`;

b.style.animationDuration=

8+Math.random()*6+"s";

document.getElementById("balloons")

.appendChild(b);

}

}

balloons();



//===============================
// CONFETTI
//===============================

function confettiBurst(){

for(let i=0;i<120;i++){

let c=document.createElement("div");

c.className="miniConfetti";

c.style.left="50%";

c.style.top="50%";

c.style.background=

`hsl(${Math.random()*360},100%,60%)`;

document.body.appendChild(c);

let angle=Math.random()*360;

let dist=150+Math.random()*250;

c.animate([

{

transform:"translate(0,0)",

opacity:1

},

{

transform:

`translate(${Math.cos(angle)*dist}px,

${Math.sin(angle)*dist}px)

rotate(${Math.random()*720}deg)`,

opacity:0

}

],{

duration:2200

});

setTimeout(()=>{

c.remove();

},2200);

}

}



//===============================
// TYPEWRITER
//===============================

const message=`

Happy Birthday ❤️

May every smile stay forever on your face.

I wish every dream of yours comes true.

Thank you for coming into my life.

You are my happiness.

`;

const letter=document.getElementById("letter");

let index=0;

function typeLetter(){

if(index<message.length){

letter.innerHTML+=message.charAt(index);

index++;

setTimeout(typeLetter,35);

}

}



//===============================
// OPEN LETTER
//===============================

document.querySelector(".envelope")

.addEventListener("click",()=>{

letter.innerHTML="";

index=0;

typeLetter();

});



//===============================
// COUNTDOWN
//===============================

function countdown(){

let target=new Date("July 9, 2026 00:00:00");

let now=new Date();

let diff=target-now;

if(diff<0)return;

let d=Math.floor(diff/86400000);

let h=Math.floor(diff/3600000)%24;

let m=Math.floor(diff/60000)%60;

let s=Math.floor(diff/1000)%60;

let box=document.getElementById("countdown");

if(box){

box.innerHTML=

`${d}d ${h}h ${m}m ${s}s`;

}

}

setInterval(countdown,1000);



//===============================
// SHOOTING STAR
//===============================

setInterval(()=>{

let star=document.createElement("div");

star.className="shootingStar";

star.style.top=Math.random()*40+"vh";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},3000);

},2500);



//===============================
// MUSIC AUTO
//===============================

document.body.addEventListener("click",()=>{

music.play().catch(()=>{});

},{once:true});



//===============================
// FINAL MESSAGE
//===============================

window.addEventListener("scroll",()=>{

let end=document.getElementById("ending");

let rect=end.getBoundingClientRect();

if(rect.top<window.innerHeight-150){

fireworks();

}

});/*====================================================
PART 5
Advanced Animation
Fireworks + Balloons + Cake + Typewriter
====================================================*/


//===============================
// CAKE
//===============================

const blowBtn=document.getElementById("blowBtn");
const cutBtn=document.getElementById("cutBtn");
const flame=document.querySelector(".flame");

blowBtn.onclick=()=>{

flame.style.opacity="0";

blowBtn.innerHTML="✨ Wish Made";

createSmoke();

fireworks();

}

cutBtn.onclick=()=>{

document.getElementById("cake")

.animate([

{

transform:"scale(1)"

},

{

transform:"rotate(-2deg)"

},

{

transform:"rotate(2deg)"

},

{

transform:"scale(.95)"

},

{

transform:"scale(1)"

}

],{

duration:800

});

confettiBurst();

}



//===============================
// SMOKE
//===============================

function createSmoke(){

for(let i=0;i<15;i++){

let smoke=document.createElement("div");

smoke.className="smoke";

smoke.style.left=

50+Math.random()*20-10+"%";

smoke.style.animationDuration=

2+Math.random()+"s";

document.getElementById("cake")

.appendChild(smoke);

setTimeout(()=>{

smoke.remove();

},3000);

}

}



//===============================
// FIREWORKS
//===============================

function fireworks(){

for(let j=0;j<8;j++){

setTimeout(()=>{

firework();

},j*350);

}

}



function firework(){

let x=Math.random()*window.innerWidth;

let y=Math.random()*window.innerHeight/2;

for(let i=0;i<60;i++){

let p=document.createElement("div");

p.className="fire";

document.body.appendChild(p);

let angle=Math.random()*360;

let dist=80+Math.random()*140;

p.style.left=x+"px";

p.style.top=y+"px";

p.style.background=

`hsl(${Math.random()*360},100%,60%)`;

p.animate([

{

transform:"translate(0,0) scale(1)",

opacity:1

},

{

transform:

`translate(${Math.cos(angle)*dist}px,

${Math.sin(angle)*dist}px)

scale(0)`,

opacity:0

}

],{

duration:1500

});

setTimeout(()=>{

p.remove();

},1500);

}

}



//===============================
// BALLOONS
//===============================

function balloons(){

for(let i=0;i<30;i++){

let b=document.createElement("div");

b.className="balloon";

b.style.left=Math.random()*100+"vw";

b.style.background=

`hsl(${Math.random()*360},90%,65%)`;

b.style.animationDuration=

8+Math.random()*6+"s";

document.getElementById("balloons")

.appendChild(b);

}

}

balloons();



//===============================
// CONFETTI
//===============================

function confettiBurst(){

for(let i=0;i<120;i++){

let c=document.createElement("div");

c.className="miniConfetti";

c.style.left="50%";

c.style.top="50%";

c.style.background=

`hsl(${Math.random()*360},100%,60%)`;

document.body.appendChild(c);

let angle=Math.random()*360;

let dist=150+Math.random()*250;

c.animate([

{

transform:"translate(0,0)",

opacity:1

},

{

transform:

`translate(${Math.cos(angle)*dist}px,

${Math.sin(angle)*dist}px)

rotate(${Math.random()*720}deg)`,

opacity:0

}

],{

duration:2200

});

setTimeout(()=>{

c.remove();

},2200);

}

}



//===============================
// TYPEWRITER
//===============================

const message=`

Happy Birthday ❤️

May every smile stay forever on your face.

I wish every dream of yours comes true.

Thank you for coming into my life.

You are my happiness.

`;

const letter=document.getElementById("letter");

let index=0;

function typeLetter(){

if(index<message.length){

letter.innerHTML+=message.charAt(index);

index++;

setTimeout(typeLetter,35);

}

}



//===============================
// OPEN LETTER
//===============================

document.querySelector(".envelope")

.addEventListener("click",()=>{

letter.innerHTML="";

index=0;

typeLetter();

});



//===============================
// COUNTDOWN
//===============================

function countdown(){

let target=new Date("July 9, 2026 00:00:00");

let now=new Date();

let diff=target-now;

if(diff<0)return;

let d=Math.floor(diff/86400000);

let h=Math.floor(diff/3600000)%24;

let m=Math.floor(diff/60000)%60;

let s=Math.floor(diff/1000)%60;

let box=document.getElementById("countdown");

if(box){

box.innerHTML=

`${d}d ${h}h ${m}m ${s}s`;

}

}

setInterval(countdown,1000);



//===============================
// SHOOTING STAR
//===============================

setInterval(()=>{

let star=document.createElement("div");

star.className="shootingStar";

star.style.top=Math.random()*40+"vh";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},3000);

},2500);



//===============================
// MUSIC AUTO
//===============================

document.body.addEventListener("click",()=>{

music.play().catch(()=>{});

},{once:true});



//===============================
// FINAL MESSAGE
//===============================

window.addEventListener("scroll",()=>{

let end=document.getElementById("ending");

let rect=end.getBoundingClientRect();

if(rect.top<window.innerHeight-150){

fireworks();

}

});
/*====================================================
PART 6
Ultra Premium Effects
Particles + Cursor Hearts + Background + Ending
====================================================*/


//==================================
// FLOATING PARTICLES
//==================================

function createParticle(){

const p=document.createElement("div");

p.className="particle";

p.style.left=Math.random()*100+"vw";

p.style.animationDuration=(6+Math.random()*6)+"s";

p.style.opacity=Math.random();

document.body.appendChild(p);

setTimeout(()=>{

p.remove();

},12000);

}

setInterval(createParticle,250);



//==================================
// CURSOR HEART
//==================================

document.addEventListener("mousemove",(e)=>{

const heart=document.createElement("div");

heart.className="cursorHeart";

heart.innerHTML="❤";

heart.style.left=e.pageX+"px";

heart.style.top=e.pageY+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},900);

});



//==================================
// RANDOM LOVE QUOTES
//==================================

const quotes=[

"You are my favourite person ❤️",

"Forever starts with you 💖",

"You make my world beautiful 🌸",

"Every moment with you is special ✨",

"My happiest place is beside you 🤍",

"You are my home 🏡",

"I'll always choose you ❤️"

];

const quote=document.getElementById("loveQuote");

if(quote){

let i=0;

setInterval(()=>{

quote.style.opacity="0";

setTimeout(()=>{

quote.innerHTML=quotes[i];

quote.style.opacity="1";

i++;

if(i>=quotes.length){

i=0;

}

},500);

},3500);

}



//==================================
// BUTTON RIPPLE
//==================================

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",(e)=>{

const ripple=document.createElement("span");

ripple.className="ripple";

ripple.style.left=e.offsetX+"px";

ripple.style.top=e.offsetY+"px";

btn.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});



//==================================
// PHOTO AUTO GLOW
//==================================

setInterval(()=>{

document.querySelectorAll(".photo-grid img")

.forEach(img=>{

img.style.filter=

`drop-shadow(0 0 ${20+Math.random()*30}px hotpink)`;

});

},1200);



//==================================
// SECTION FADE
//==================================

const fadeSections=document.querySelectorAll("section");

const fadeObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.animate([

{

opacity:0,

transform:"translateY(120px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:1200,

fill:"forwards"

});

}

});

});

fadeSections.forEach(sec=>{

fadeObserver.observe(sec);

});



//==================================
// BACKGROUND COLOR SHIFT
//==================================

let hue=0;

setInterval(()=>{

hue++;

document.body.style.background=

`linear-gradient(

135deg,

hsl(${hue},55%,8%),

hsl(${hue+40},55%,12%)

)`;

},120);



//==================================
// END FIREWORK LOOP
//==================================

const ending=document.getElementById("ending");

const endObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const timer=setInterval(()=>{

firework();

},1200);

setTimeout(()=>{

clearInterval(timer);

},15000);

}

});

});

if(ending){

endObserver.observe(ending);

}



//==================================
// FLOATING EMOJIS
//==================================

const emojis=[

"💖",

"🌸",

"✨",

"🎈",

"🎉",

"🦋",

"💫"

];

setInterval(()=>{

const em=document.createElement("div");

em.className="emojiFloat";

em.innerHTML=

emojis[Math.floor(Math.random()*emojis.length)];

em.style.left=Math.random()*100+"vw";

em.style.fontSize=(20+Math.random()*30)+"px";

document.body.appendChild(em);

setTimeout(()=>{

em.remove();

},9000);

},700);



//==================================
// PAGE TITLE ANIMATION
//==================================

const titles=[

"❤️ Happy Birthday ❤️",

"🎂 Just For You 🎂",

"💖 Open Me 💖",

"✨ I Love You ✨"

];

let t=0;

setInterval(()=>{

document.title=titles[t];

t++;

if(t>=titles.length){

t=0;

}

},2000);



//==================================
// FINAL AUTO MESSAGE
//==================================

window.addEventListener("load",()=>{

setTimeout(()=>{

console.log(

"🎉 Premium Birthday Website Loaded Successfully ❤️"

);

},2500);

});



/*====================================================
END OF PART 6
====================================================*/
/*====================================================
PART 8
Premium Final Effects
3D Cards + Auto Slider + Secret Surprise
====================================================*/


//======================================
// 3D PHOTO EFFECT
//======================================

document.querySelectorAll(".photo-grid img").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*24;

const rotateX=((y/rect.height)-0.5)*-24;

card.style.transform=

`perspective(1200px)
 rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)
 scale(1.08)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

"perspective(1200px) rotateX(0) rotateY(0) scale(1)";

});

});



//======================================
// HERO TEXT FLOAT
//======================================

setInterval(()=>{

document.querySelector(".title")

.animate([

{

transform:"translateY(0px)"

},

{

transform:"translateY(-10px)"

},

{

transform:"translateY(0px)"

}

],{

duration:2500

});

},2600);




//======================================
// PHOTO AUTO SLIDER
//======================================

let current=0;

const photos=document.querySelectorAll(".photo-grid img");

function highlightPhoto(){

photos.forEach(img=>{

img.style.opacity=".45";

img.style.transform="scale(.92)";

});

photos[current].style.opacity="1";

photos[current].style.transform="scale(1.08)";

current++;

if(current>=photos.length){

current=0;

}

}

setInterval(highlightPhoto,2200);




//======================================
// LOVE QUOTE TYPEWRITER
//======================================

const quoteText=[

"You are my sunshine ❤️",

"You make every day beautiful 🌸",

"My favourite notification is you 💖",

"I fall for you everyday ✨",

"You are my forever ❤️"

];

let q=0;

function changeQuote(){

if(!document.getElementById("loveQuote")) return;

let txt=quoteText[q];

let i=0;

document.getElementById("loveQuote").innerHTML="";

let writer=setInterval(()=>{

document.getElementById("loveQuote").innerHTML+=txt.charAt(i);

i++;

if(i>=txt.length){

clearInterval(writer);

}

},60);

q++;

if(q>=quoteText.length){

q=0;

}

}

changeQuote();

setInterval(changeQuote,5000);




//======================================
// SECRET DOUBLE CLICK
//======================================

document.body.addEventListener("dblclick",()=>{

for(let i=0;i<120;i++){

let heart=document.createElement("div");

heart.className="emojiFloat";

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(25+Math.random()*30)+"px";

heart.style.animationDuration=

(4+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

});




//======================================
// SHAKE BUTTON
//======================================

setInterval(()=>{

const btn=document.getElementById("startBtn");

if(btn){

btn.animate([

{

transform:"rotate(0deg)"

},

{

transform:"rotate(-3deg)"

},

{

transform:"rotate(3deg)"

},

{

transform:"rotate(0deg)"

}

],{

duration:700

});

}

},7000);




//======================================
// BACKGROUND GLOW
//======================================

let glow=0;

setInterval(()=>{

glow++;

document.querySelector("#background").style.filter=

`hue-rotate(${glow}deg)`;

},150);




//======================================
// RANDOM SPARKLE
//======================================

setInterval(()=>{

let star=document.createElement("div");

star.innerHTML="✨";

star.className="emojiFloat";

star.style.left=Math.random()*100+"vw";

star.style.fontSize=(15+Math.random()*25)+"px";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},6000);

},500);




//======================================
// MUSIC VISUALIZER
//======================================

music.addEventListener("play",()=>{

setInterval(()=>{

document.querySelectorAll(".music-bar")

.forEach(bar=>{

bar.style.height=

20+Math.random()*70+"px";

});

},150);

});




//======================================
// HAPPY BIRTHDAY POPUP
//======================================

setTimeout(()=>{

const popup=document.createElement("div");

popup.id="birthdayPopup";

popup.innerHTML=`

<h2>🎂 Happy Birthday ❤️</h2>

<p>I hope this day becomes one of the happiest memories of your life 💖</p>

<button id="closePopup">Open Surprise</button>

`;

document.body.appendChild(popup);

document.getElementById("closePopup")

.onclick=()=>{

popup.remove();

};

},3500);




//======================================
// ENDING FIREWORK RAIN
//======================================

function finalShow(){

let timer=setInterval(()=>{

firework();

},500);

setTimeout(()=>{

clearInterval(timer);

},18000);

}

window.addEventListener("scroll",()=>{

const end=document.getElementById("ending");

if(!end) return;

const top=end.getBoundingClientRect().top;

if(top<250){

finalShow();

}

});




//======================================
// CONSOLE MESSAGE
//======================================

console.log("%cMade with ❤️ by Anubhav",

"color:pink;font-size:22px;font-weight:bold");



/*====================================================
END OF PART 8
====================================================*/
/*====================================================
PART 9
EXTRA PREMIUM EFFECTS
====================================================*/


//======================================
// SNOW / PETALS
//======================================

function createPetal(){

const petal=document.createElement("div");

petal.innerHTML="🌸";

petal.className="emojiFloat";

petal.style.left=Math.random()*100+"vw";

petal.style.fontSize=(18+Math.random()*20)+"px";

petal.style.animationDuration=(7+Math.random()*5)+"s";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},12000);

}

setInterval(createPetal,900);




//======================================
// AUTO GLOW NAME
//======================================

const heroName=document.querySelector(".name");

if(heroName){

setInterval(()=>{

heroName.animate([

{

textShadow:"0 0 20px #ff4fa2"

},

{

textShadow:"0 0 70px #ffffff"

},

{

textShadow:"0 0 20px #ff4fa2"

}

],{

duration:2200

});

},2200);

}




//======================================
// RANDOM HEART BURST
//======================================

function randomBurst(){

let x=Math.random()*window.innerWidth;

let y=Math.random()*window.innerHeight;

for(let i=0;i<18;i++){

let h=document.createElement("div");

h.className="emojiFloat";

h.innerHTML="💖";

h.style.left=x+"px";

h.style.top=y+"px";

h.style.position="fixed";

document.body.appendChild(h);

let angle=Math.random()*360;

let distance=50+Math.random()*120;

h.animate([

{

transform:"translate(0,0) scale(1)",

opacity:1

},

{

transform:

`translate(${Math.cos(angle)*distance}px,

${Math.sin(angle)*distance}px)

scale(.2)`,

opacity:0

}

],{

duration:1800

});

setTimeout(()=>{

h.remove();

},1800);

}

}

setInterval(randomBurst,8000);




//======================================
// SCROLL PROGRESS
//======================================

const progress=document.createElement("div");

progress.id="progressBar";

progress.style.position="fixed";

progress.style.left="0";

progress.style.top="0";

progress.style.height="5px";

progress.style.zIndex="999999";

progress.style.background="linear-gradient(90deg,#ff4fa2,#ffd369,#7efcff)";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const current=window.scrollY;

progress.style.width=(current/total)*100+"%";

});




//======================================
// CLICK HEART
//======================================

document.addEventListener("click",(e)=>{

let heart=document.createElement("div");

heart.className="cursorHeart";

heart.innerHTML="💗";

heart.style.left=e.pageX+"px";

heart.style.top=e.pageY+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},1000);

});




//======================================
// AUTO FIREWORK
//======================================

setInterval(()=>{

if(Math.random()>.7){

firework();

}

},6000);




//======================================
// PHOTO RANDOM SCALE
//======================================

setInterval(()=>{

photos.forEach(img=>{

img.style.transform="scale(1)";

});

let random=Math.floor(Math.random()*photos.length);

photos[random].style.transform="scale(1.08)";

},3500);




//======================================
// END MESSAGE
//======================================

console.log(

"%c❤️ Website Loaded Successfully ❤️",

"font-size:20px;color:#ff4fa2;font-weight:bold;"

);



/*====================================================
END OF PART 9
====================================================*/
