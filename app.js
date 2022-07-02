const timeLeftDispley = document.querySelector('#time-left')
const resultDisplay = document.querySelector('#result')
const mainButton = document.querySelector('#main-button')
const squares = document.querySelectorAll('.grid div')

console.log(squares);
let currentSquare = 76;

function moveFrog(e) {

  switch (e.key) {
    case 'ArrowLeft':
      console.log('move left');
      break
    case 'ArrowRight':
      console.log('move right');
      break
    case 'ArrowUp':
      console.log('move Up');
      break
    case 'ArrowDown':
      console.log('move Down');
      break


  }

  squares[currentSquare].classList.add('tomato')

}

document.addEventListener('keyup', moveFrog)
