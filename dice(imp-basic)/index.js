var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = randomDiceImage; //dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

// =============================================================
var randomImageSource2 = "dice" + randomNumber2 + ".png";

//document.querySelector("#img2").setAttribute("src", randomImageSource2);
// above method was also accurate as below method .
//in above method selector #id and .class has been used
// in method below img tag has been targetted
//document.querySelectorAll("img").setAttribute("src", randomImageSource2);
document.getElementById("img2").setAttribute("src", randomImageSource2);
//If player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = " Play 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! ";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}