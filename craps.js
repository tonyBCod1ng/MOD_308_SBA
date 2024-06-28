let shakin = false;
let point = 0;
let roll = 0;
let intervalId;
let firstRoll = true;
const faces = {
    "ONE": "Dice1.png",
    "TWO": "Dice2.png",
    "THREE": "Dice3.png",
    "FOUR": "Dice4.png",
    "FIVE": "Dice5.png",
    "SIX": "Dice6.png",
}
const display = document.getElementById("value-display");
const dice1 = document.getElementsByClassName("dice-mat")[0];
const dice2 = document.getElementsByClassName("dice-mat")[1];
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}




function remindToShake() {
    const display = document.getElementById("value-display");
    display.innerHTML = "Start Shakin'!";
}

function stopRoll() {
    shakin = false;
    clearInterval(intervalId);

    if (firstRoll === true) {
        let diceUnoVal = getRandomInt(1, 6);
        let diceTwoVal = getRandomInt(1, 6);
        const diOneFace = document.getElementById("di-1");
        const diTwoFace = document.getElementById("di-2");
        const roll = diceUnoVal + diceTwoVal;
        diTwoFace.src = showFace(diceTwoVal);
        diOneFace.src = showFace(diceUnoVal);
        if(roll === 7 || roll == 11){
            display.innerHTML = `${roll} You Win!`;
            return;
        }
        else if(roll === 2 || roll === 3 || roll === 12){
            display.innerHTML = `${roll} You Lose!`;
            return;
        }


    }
    else if(firstRoll === false) {
        point = roll;
        display.innerHTML = `Your point is ${point}, roll again.`;
        firstRoll = false;
        console.log("notfirst");
        diceUnoVal2 = getRandomInt(1, 6);
        diceTwoVal2 = getRandomInt(1, 6);
         diOneFace = document.getElementById("di-1");
         diTwoFace = document.getElementById("di-2");
         roll = diceUnoVal + diceTwoVal;
        diTwoFace.src = showFace(diceTwoVal2);
        diOneFace.src = showFace(diceUnoVal2);
        if(roll === 7 ){
            display.innerHTML = `${roll} You Lose!`;
            firstRoll = true;
            return;
        }
        else {
            if(roll === point ) {
              display.innerHTML =  `${roll} You Win!`;
              firstRoll = true;
            } else {
                display.innerHTML = `Your point is ${point}, roll again.`;
                firstRoll = false;
            }
        }


    }


}

function showFace(num) {
switch (num){
    case 1 : return "Dice1.png";
    break;
    case 2 : return "Dice2.png";
    break;
    case 3 : return "Dice3.png";
    break;
    case 4 : return "Dice4.png";
    break;
    case 5 : return "Dice5.png";
    break;
    case 6 : return "Dice6.png";
    break;
    default : return "Dice1.png"
}
}



function shakeBones(event) {
    shakin = true;
    const diceMat = document.getElementsByClassName("dice-mat");
    if (intervalId) {
        clearInterval(intervalId)
    }

    intervalId = setInterval(() => {
        diceMat[0].src = showFace(getRandomInt(1,6));
        diceMat[1].src = showFace(getRandomInt(1,6));
    }, 50);
}