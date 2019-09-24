const slidContent = document.getElementById('slid_content');
const slidBottomLeft = document.getElementById('slid_button_block_left');
const slidBottomRight = document.getElementById('slid_button_block_right');
const index = 0;

function addingFuncOne () {
  const slidArray = document.getElementsByClassName('text_slid_block');
  let currentItem = slidArray[0];
  slidContent.insertBefore(currentItem, slidArray[slidArray[0] + 1]);
  currentItem = slidArray[0];
  return;
}

function addingFuncTwo () {
  const slidArray = document.getElementsByClassName('text_slid_block');
  let currentItem = slidArray[0];
  slidContent.insertBefore(currentItem, slidArray[slidArray[0] - 1]);
  currentItem = slidArray[0];
  return;
}


function funcDistributorOne (direction) {
  const slidArray = document.getElementsByClassName('text_slid_block');
  let currentItem = slidArray[0];
  if (slidArray[0] === currentItem && direction === 'right') {
    if (index === slidArray.length - 1) {
      slidContent.insertBefore(currentItem, slidArray[0]);
      currentItem = slidArray[0];
      return;
    }
    addingFuncOne ()
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
    addingFuncTwo ()
  }
}

slidBottomRight.addEventListener('click', () => {
  funcDistributorOne('right')
})

slidBottomLeft.addEventListener('click', () => {
  funcDistributorTwo('left')
});


