var images = document.querySelectorAll("img");
var randomArray = [];
for (var i = 0; i < images.length; i++) {
  var random = Math.floor(Math.random() * 6) + 1;
  randomArray.push(random)
  images[i].setAttribute("src", "./images/dice" + randomArray[i] + ".png");

  if (randomArray[0] > randomArray[i]) {
    document.querySelector("h1").innerHTML = "Player 1 wins!"
  } else if (randomArray[0] < randomArray[i]) {
    document.querySelector("h1").innerHTML = "Player 2 wins!"
  } else {
    document.querySelector("h1").innerHTML = "Draw!"
  }


}
