// dice 1

var randomNumber1 = Math.ceil(Math.random() * 6);

var randomDiceImage = "dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage);

// dice 2

var randomNumber2 = Math.floor((Math.random()*6)+1);

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);



if(randomNumber1 == randomNumber2){
    document.querySelector("h1").textContent = "Draw 🤡";
}

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins 🎉";
}

if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player 2 Wins 🎉";
}