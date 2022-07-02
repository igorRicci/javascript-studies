const timeLeftDispley = document.querySelector('#time-left')
const resultDisplay = document.querySelector('#result')
const mainButton = document.querySelector('#main-button')
const squares = document.querySelectorAll('.grid div')
const logsLeft = document.querySelectorAll('.log-left')
const logsRight = document.querySelectorAll('.log-right')

console.log(squares);
let currentSquare = 76;
const width = 9;

function moveFrog(e) {

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
document.addEventListener('keyup', moveFrog)

function autoMoveLogs() {
  logsLeft.forEach((logLeft) => {
    moveLogLeft(logLeft)
  })
}

autoMoveLogs

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
      logLeft.classList.remove('l5')
      logLeft.classList.add('l5')
      break
    case logLeft.classList.contains('l5') :
      logLeft.classList.remove('l5')
      logLeft.classList.add('l1')
      break
  }
}

setInterval(autoMoveLogs, 1000)
