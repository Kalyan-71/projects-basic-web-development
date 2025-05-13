let timer = 60;
let hit;
let score = 0;
function makeBubble(){
    let bubbles = "";
    for(let i=1;i<=160;i++){
        let rn = Math.floor(Math.random()*10);
        bubbles += `<div class="bubble">${rn}</div>`;

    }
    document.querySelector("#pbtm").innerHTML = bubbles;
}

function getNewHit(){
    hit = Math.floor(Math.random()*10);
    document.querySelector("#hitval").innerHTML = hit;
}


function runTimer(){

    let timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerint").innerHTML = timer;
            
        }else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000);
}

function increaseScore(){
    score+=10;
    document.querySelector("#score").innerHTML = score;
}

function checkHit(){
    document.querySelector("#score").innerHTML = score;
    document.querySelector("#pbtm").addEventListener("click",function(details){
        let num=Number(details.target.textContent);
        if(num==hit){
            increaseScore();
            makeBubble();
            getNewHit();

        }
    });
}

makeBubble();
runTimer();
getNewHit();
checkHit();