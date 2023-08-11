let closes = document.querySelectorAll("#close");
for(close of closes)
{
    close.addEventListener("click", function(){
        document.querySelector(".popup").style.display = "none";
    });
}


window.addEventListener("load", function(){
    setTimeout(
        function openn(event){
            document.querySelector(".popup").classList.add('open');
        },
        500
    )
});




let h2 = document.querySelector(".gameinfo");
let btns = ["darkblue", "lighter", "lighter2", "lightest"];

let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let highestscore = 0;

document.addEventListener("keypress", function()
{
    if(started == false)
    {
        console.log("started");
        started = true;
        levelUp();
    }
    
});
document.addEventListener("touchstart", function()
{
    if(started == false)
    {
        console.log("started");
        started = true;
        levelUp();
    }
    
});



function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function (){
        btn.classList.remove("userFlash");
    }, 250);
}



function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randbtn);
}

function check(index)
{
   
    if(gameSeq[index] == userSeq[index])
    {
        if(userSeq.length == gameSeq.length)
        {
            setTimeout(levelUp, 1000);
        }
    }
    else{
        highestscore = trackhs(level, highestscore);
        h2.innerHTML = `Game over! Score:<b>${level}</b> <br> Press any key to start <br> highest score ${highestscore}`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 300);
        reset();

        
    }
}

function btnPress(){
// console.log("pressed");
let btn = this;
userFlash(btn);
userColor = btn.getAttribute("id");
userSeq.push(userColor);

check(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".boxes")

for(btn of allBtns)
{
    btn.addEventListener("click", btnPress);
}

function reset()
{
   started = false;
   gameSeq = [];
   userSeq = [];
   level = 0;
}
function trackhs(level, highestscore){
    if(level>highestscore)
    {
        highestscore = level;
    }
    return highestscore;
    
}

