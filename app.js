const timeLeftDispley = document.querySelector('#time-left')
const resultDisplay = document.querySelector('#result')
const mainButton = document.querySelector('#main-button')
const squares = document.querySelectorAll('.grid div')

console.log(squares);
let currentSquare = 0;

function moveFrog() {
  squares[currentSquare].classList.add('tomato')

}

document.addEventListener('keyup', moveFrog)
