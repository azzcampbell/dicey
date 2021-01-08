function random() {
  return Math.floor((Math.random() * 6) + 1) // Round down a random number between 0 and 1, multiply it by 6 and then add 1
}

function randomNumber() {
  var a = random() // First random number
  var b = random() // Second random number

  var playerOneDice = `images/dice${a}.png` // Update the SRC path with the first variable
  document.querySelectorAll("img")[0].src = playerOneDice // Update Player 1's dice image

  var playerTwoDice = `images/dice${b}.png` // Update the SRC path with the first variable
  document.querySelectorAll("img")[1].src = playerTwoDice // Update Player 2's dice image

  document.querySelector("h1").style.fontSize = "6rem"

  if (b > a) {
    document.querySelector("h1").innerText = 'Player 2 Wins!'
  } else if (a > b) {
    document.querySelector("h1").innerText = 'Player 1 Wins!'
  } else {
    document.querySelector("h1").innerText = "Draw!"
  }
}
