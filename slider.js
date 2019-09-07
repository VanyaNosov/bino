let textSlidBlockOne = document.getElementById('slid_text_one');
let textSlidBlockTwo = document.getElementById('slid_text_two');
const slidContent = document.getElementById('slid_content');
const slidBottomLeft = document.getElementById('slid_button_block_left');
const slidBottomRight = document.getElementById('slid_button_block_right');

function leftElem () {
  const cloneOne = textSlidBlockTwo.cloneNode(true);
  const slidArray = document.getElementsByClassName('text_slid_block');
  slidContent.insertBefore(cloneOne, slidArray[0]);
}

function leftMovement (direction, slide) {
  const slidArray = document.getElementsByClassName('text_slid_block');
  const cloneOne = slide.cloneNode(true);
  if(direction === 'back') {
    slidContent.removeChild(slidArray[0]);
    slidContent.appendChild(cloneOne);
  }else {
    slidContent.removeChild(slidArray[slidArray.length - 1])
    slidContent.insertBefore(cloneOne, slidArray[0]);
  }
}

slidBottomRight.addEventListener('click', () => {
  leftMovement('back', textSlidBlockOne);
})

slidBottomLeft.addEventListener('click', () => {
  console.log('1')
})

leftElem ()
