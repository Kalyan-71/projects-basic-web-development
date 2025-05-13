let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#newbutton");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;
const win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach( (boxes) =>{
    boxes.addEventListener("click",()=>{
        console.log("box clicked");
        if(turnO){
            boxes.innerText = "O"
            turnO = !turnO;
        }else{
            boxes.innerText = "X"
            turnO = !turnO;
        }
        boxes.disabled= true;
        count++;

        let isWinner = checkWinner();
        if(count === 9 && !isWinner) {
            gameDraw();
        }
    });
} );
const gameDraw = () => {
    // console.log("try again");
    msg.innerText = `Try again`;
    msgContainer.classList.remove("hide");
    count = 0;
};

const checkWinner = ()=>{
    for(let pattern of win){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos1Val !="" && pos1Val !=""){
            if(pos1Val === pos2Val && pos1Val === pos3Val){
                // console.log("Winner");
                showWinner(pos1Val);
                return true;
            }
        }
    }
};

const showWinner = (winner)=>{
   
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    // disableBoxes();
};

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;

    }
};

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};


const resetGame = () =>{
    console.log("reset");
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}; 
newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);