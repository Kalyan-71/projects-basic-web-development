/*
let count = 0;

document.getElementById("decreaseBtn").onclick = function(){
    count--;
    document.getElementById("countLabel").textContent = count;
}

document.getElementById("resetBtn").onclick = function(){
    count=0;
    document.getElementById("countLabel").textContent = count;
}

document.getElementById("increaseBtn").onclick = function(){
    count++;
    document.getElementById("countLabel").textContent = count;
}
*/

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count=0;
    countLabel.textContent = count;
}

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}