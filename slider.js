let textSlidBlockOne = document.getElementById('slid_text_one');
let textSlidBlockTwo = document.getElementById('slid_text_two');
let textSlidBlockthree = document.getElementById('slid_text_three ');
let textSlidBlockfoure = document.getElementById('slid_text_foure');
let textSlidBlockfive = document.getElementById('slid_text_five ');
const slidContent = document.getElementById('slid_content');
const slidBottomLeft = document.getElementById('slid_button_block_left');
const slidBottomRight = document.getElementById('slid_button_block_right');
const index = 0;

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



function funcDistributorOne (direction) {
  const slidArray = document.getElementsByClassName('text_slid_block');
  let currentItem = slidArray[0];
    if (slidArray[0] === currentItem && direction === 'right') {
      if (index === slidArray.length - 1) {
        slidContent.insertBefore(currentItem, slidArray[0]);
        currentItem = slidArray[0];
        return;
      }
      slidContent.insertBefore(currentItem, slidArray[slidArray[0] + 1]);
      currentItem = slidArray[0];
      return;
    }
}

function funcDistributorTwo (direction) {
  const slidArray = document.getElementsByClassName('text_slid_block');
  let currentItem = slidArray[0];
  if (slidArray[0] === currentItem && direction === 'left') {
    if (index === 0) {
      slidContent.insertBefore(slidArray[slidArray.length - 1], currentItem);
      currentItem = slidArray[slidArray.length - 1];
      return;
    }
    slidContent.insertBefore(currentItem, slidArray[slidArray[0] - 1]);
    currentItem = slidArray[0];
    return;
  }
}

slidBottomRight.addEventListener('click', () => {
  // leftMovement('back', textSlidBlockOne);
  funcDistributorOne('right')
})

slidBottomLeft.addEventListener('click', () => {
  // leftMovement('back', textSlidBlockOne);
  funcDistributorTwo('left')
});


