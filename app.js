const timeLeftDispley = document.querySelector('#time-left')
const resultDisplay = document.querySelector('#result')
const mainButton = document.querySelector('#main-button')
const squares = document.querySelectorAll('.grid div')

function moveFrog() {
  console.log('moved');

}

document.addEventListener('keyup', moveFrog)
