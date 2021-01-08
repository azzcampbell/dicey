function random() {
  return Math.floor((Math.random() * 6) + 1) // Round down a random number between 0 and 1, multiply it by 6 and then add 1
}

function randomNumber() {
  var a = random() // First random number
  var b = random() // Second random number

  document.querySelectorAll("img")[0].src = `images/dice${a}.png` // Target the image source and replace it
  document.querySelectorAll("img")[1].src = `images/dice${b}.png` // Target the image source and replace it
  document.querySelector("h1").style.fontSize = '6rem' // Reduce the font size once the button is pressed

  if (b > a) {
    document.querySelector("h1").innerText = 'Player 2 Wins!'
  } else if (a > b) {
    document.querySelector("h1").innerText = 'Player 1 Wins!'
  } else {
    document.querySelector("h1").innerText = 'Draw!'
  }
}
