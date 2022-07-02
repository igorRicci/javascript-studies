const timeLeftDispley = document.querySelector('#time-left')
const resultDisplay = document.querySelector('#result')
const mainButton = document.querySelector('#main-button')
const squares = document.querySelectorAll('.grid div')

console.log(squares);
let currentSquare = 76;
const step = 9;

function moveFrog(e) {

  squares[currentSquare].classList.remove('tomato')

  switch (e.key) {
    case 'ArrowLeft':
      console.log('move left');
      currentSquare -= 1;
      break
    case 'ArrowRight':
      console.log('move right');
      currentSquare += 1;
      break
    case 'ArrowUp':
      console.log('move Up');
      currentSquare -= step;
      break
    case 'ArrowDown':
      console.log('move Down');
      currentSquare += step;
      break
    default:
      console.log('invalid key');


  }

  squares[currentSquare].classList.add('tomato')

}

document.addEventListener('keyup', moveFrog)
