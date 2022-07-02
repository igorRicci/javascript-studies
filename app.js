const timeLeftDispley = document.querySelector('#time-left')
const resultDisplay = document.querySelector('#result')
const mainButton = document.querySelector('#main-button')
const squares = document.querySelectorAll('.grid div')

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

  console.log(`Index: ${currentSquare}`);
  console.log(`Index / width: ${currentSquare % width}`);
  console.log(`Width: ${width}`);
  console.log(currentSquare % width < width - 1);
  squares[currentSquare].classList.add('tomato')

}

document.addEventListener('keyup', moveFrog)
