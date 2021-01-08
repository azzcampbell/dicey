function randomNumber() {
    var randomNumber1 = Math.floor((Math.random() * 6) + 1)
    var randomNumber2 = Math.floor((Math.random() * 6) + 1)
    var dicePlayer1 = "images/dice" + randomNumber1 + ".png"
    var dicePlayer2 = `images/dice${randomNumber2}.png`
    document.querySelectorAll("img")[0].src = dicePlayer1
    document.querySelectorAll("img")[1].src = dicePlayer2

    if (randomNumber1 === randomNumber2) {
      document.querySelector("h1").innerText = "Draw!"
      document.querySelector("h1").style.fontSize = "6rem"
    } else if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = '<img src="images/flag.png" class="flag"> Player 1 Wins!</img>'
      document.querySelector("h1").style.fontSize = "6rem"
    } else if (randomNumber1 < randomNumber2) {
      document.querySelector("h1").innerHTML = ' Player 2 Wins! <img src="images/flag.png" class="flag"></img>'
      document.querySelector("h1").style.fontSize = "6rem"
    }
  }
