const timeLeftDispley = document.querySelector('#time-left')
const resultDisplay = document.querySelector('#result')
const mainButton = document.querySelector('#main-button')
const squares = document.querySelectorAll('.grid div')
const logsLeft = document.querySelectorAll('.log-left')
const logsRight = document.querySelectorAll('.log-right')
const carsLeft = document.querySelectorAll('.car-left')
const carsRight = document.querySelectorAll('.car-right')

console.log(squares)
let currentSquare = 76
const width = 9
let timerIdLogs
let timerIdCars
let currentTime = 20

function moveTomato(e) {

  squares[currentSquare].classList.remove('tomato')

  switch (e.key) {
    case 'ArrowLeft':
      if (currentSquare % width !== 0) currentSquare -= 1;
      break
    case 'ArrowRight':
      if (currentSquare % width < (width - 1)) currentSquare += 1;
      break
    case 'ArrowUp':
      if (currentSquare - width >= 0) currentSquare -= width;
      break
    case 'ArrowDown':
      if (currentSquare + width < width * width) currentSquare += width;
      break
    default:
      console.log('invalid key');
  }

  // console.log(`Index: ${currentSquare}`);
  // console.log(`Index / width: ${currentSquare % width}`);
  // console.log(`Width: ${width}`);
  // console.log(currentSquare % width < width - 1);
  squares[currentSquare].classList.add('tomato')

}
document.addEventListener('keyup', moveTomato)

function autoMoveLogs() {
  currentTime--
  timeLeftDispley.textContent = currentTime
  logsLeft.forEach((logLeft) => {
    moveLogLeft(logLeft)
  })
  logsRight.forEach((logRight) => {
    moveLogRight(logRight)
  })
  lose()
  win()
}

function moveLogLeft(logLeft) {
  switch (true) {
    case logLeft.classList.contains('l1') :
      logLeft.classList.remove('l1')
      logLeft.classList.add('l2')
      break
    case logLeft.classList.contains('l2') :
      logLeft.classList.remove('l2')
      logLeft.classList.add('l3')
      break
    case logLeft.classList.contains('l3') :
      logLeft.classList.remove('l3')
      logLeft.classList.add('l4')
      break
    case logLeft.classList.contains('l4') :
      logLeft.classList.remove('l4')
      logLeft.classList.add('l5')
      break
    case logLeft.classList.contains('l5') :
      logLeft.classList.remove('l5')
      logLeft.classList.add('l1')
      break
  }
}

function moveLogRight(logRight) {
  switch (true) {
    case logRight.classList.contains('l1') :
      logRight.classList.remove('l1')
      logRight.classList.add('l5')
      break
    case logRight.classList.contains('l2') :
      logRight.classList.remove('l2')
      logRight.classList.add('l1')
      break
    case logRight.classList.contains('l3') :
      logRight.classList.remove('l3')
      logRight.classList.add('l2')
      break
    case logRight.classList.contains('l4') :
      logRight.classList.remove('l4')
      logRight.classList.add('l3')
      break
    case logRight.classList.contains('l5') :
      logRight.classList.remove('l5')
      logRight.classList.add('l4')
      break
  }
}

timerIdLogs = setInterval(autoMoveLogs, 1000)


function autoMoveCars() {
  carsLeft.forEach((carLeft) => {
    moveCarLeft(carLeft)
  })
  carsRight.forEach((carRight) => {
    moveCarRight(carRight)
  })
  lose()
  win()
}

function moveCarLeft(carLeft) {
  switch (true) {
    case carLeft.classList.contains('c3') :
      carLeft.classList.remove('c3')
      carLeft.classList.add('c1')
      break
    case carLeft.classList.contains('c2') :
      carLeft.classList.remove('c2')
      carLeft.classList.add('c3')
      break
    case carLeft.classList.contains('c1') :
      carLeft.classList.remove('c1')
      carLeft.classList.add('c2')
      break
  }
}

function moveCarRight(carRight) {
  switch (true) {
    case carRight.classList.contains('c3') :
      carRight.classList.remove('c3')
      carRight.classList.add('c2')
      break
    case carRight.classList.contains('c2') :
      carRight.classList.remove('c2')
      carRight.classList.add('c1')
      break
    case carRight.classList.contains('c1') :
      carRight.classList.remove('c1')
      carRight.classList.add('c3')
      break
  }
}


function lose() {
  if (
      squares[currentSquare].classList.contains('c1') ||
      squares[currentSquare].classList.contains('l4') ||
      squares[currentSquare].classList.contains('l5') ||
      currentTime <= 0
  ) {
      resultDisplay.textContent = 'You lose!'
      clearInterval(timerIdLogs)
      clearInterval(timerIdCars)
      squares[currentSquare].classList.remove('tomato')
      document.removeEventListener('keyup', moveTomato)
  }
}

function win() {
  if (
      squares[currentSquare].classList.contains('ending-block')
  ) {
      resultDisplay.textContent = 'You WIN!'
      clearInterval(timerIdLogs)
      clearInterval(timerIdCars)
      // squares[currentSquare].classList.remove('tomato')
      document.removeEventListener('keyup', moveTomato)
  }
}

timerIdCars = setInterval(autoMoveCars, 1000)

mainButton.addEventListener('click', () => {
  if (timerIdCars) {
    clearInterval(timerIdCars)
  } else {
    timerIdCars = setInterval()
  }
})
