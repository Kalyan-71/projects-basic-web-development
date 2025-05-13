function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImges = document.getElementById("diceImges");

    let values = [];
    let images = [];

    for(let i=0;i<numOfDice;i++){
        const value = Math.floor(Math.random()*6 ) + 1;
        values.push(value);
        images.push(`<img src = "dice-images/${value}.png" alt="Dice ${value}" width = 150px>`);
    }

    diceResult.textContent = `dice:${values.join(", ")}`;
    diceImges.innerHTML = images.join('');
}