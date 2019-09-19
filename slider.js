let textSlidBlockOne = document.getElementById('slid_text_one');
let textSlidBlockTwo = document.getElementById('slid_text_two');
let textSlidBlockthree = document.getElementById('slid_text_three ');
let textSlidBlockfoure = document.getElementById('slid_text_foure');
let textSlidBlockfive = document.getElementById('slid_text_five ');
const slidContent = document.getElementById('slid_content');
const slidBottomLeft = document.getElementById('slid_button_block_left');
const slidBottomRight = document.getElementById('slid_button_block_right');

// function leftElem () {
//   const cloneOne = textSlidBlockTwo.cloneNode(true);
//   const slidArray = document.getElementsByClassName('text_slid_block');
//   slidContent.insertBefore(cloneOne, slidArray[0]);
// }

// function leftMovement (direction, slide) {
//   const slidArray = document.getElementsByClassName('text_slid_block');
//   const cloneOne = slide.cloneNode(true);
//   if(direction === 'back') {
//     slidContent.removeChild(slidArray[0]);
//     slidContent.appendChild(cloneOne);
//   }else {
//     slidContent.removeChild(slidArray[slidArray.length - 1])
//     slidContent.insertBefore(cloneOne, slidArray[0]);
//   }
// }

// function fdf (direction) {
//   const slidArray = document.getElementsByClassName('text_slid_block');

// }


// slidBottomLeft.addEventListener('click', () => {
//   console.log('fd')
// })

// leftElem ()

function test (direction) {
  const slidArray = document.getElementsByClassName('text_slid_block');
  let currentItem = slidArray[0];
  for (let i = 0; i < slidArray.length; i += 1) {
    if (slidArray[i] === currentItem && direction === 'right') {
      if (i === slidArray.length - 1) {
        slidContent.insertBefore(currentItem, slidArray[0]);
        currentItem = slidArray[i];
        return;
      }
      slidContent.insertBefore(currentItem, slidArray[slidArray[i] + 1]);
      currentItem = slidArray[i];
      return;
    }
    if (slidArray[i] === currentItem && direction === 'left') {
      if (i === 0) {
        slidContent.insertBefore(slidArray[slidArray.length - 1], currentItem);
        currentItem = slidArray[slidArray.length - 1];
        return;
      }
      slidContent.insertBefore(currentItem, slidArray[slidArray[i] - 1]);
      currentItem = slidArray[i];
      return;
    }
  }
}

slidBottomRight.addEventListener('click', () => {
  // leftMovement('back', textSlidBlockOne);
  test('right')
})

slidBottomLeft.addEventListener('click', () => {
  // leftMovement('back', textSlidBlockOne);
  test('left')
});


