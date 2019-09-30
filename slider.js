let textSlidBlockOne = document.getElementById('slid_text_one');
let textSlidBlockTwo = document.getElementById('slid_text_two');
let textSlidBlockthree = document.getElementById('slid_text_three ');
let textSlidBlockfoure = document.getElementById('slid_text_foure');
let textSlidBlockfive = document.getElementById('slid_text_five ');
const slidContent = document.getElementById('slid_content');
const slidBottomLeft = document.getElementById('slid_button_block_left');
const slidBottomRight = document.getElementById('slid_button_block_right');
let slidsCollection = [...document.getElementsByClassName('text_slid_block')];
let index = 0;
let clone = slidsCollection.slice();
function startState () {
  let slidsCollection = [...document.getElementsByClassName('text_slid_block')];
  const cloneOne = slidsCollection[2].cloneNode(true)
  const cloneThree = slidsCollection[1].cloneNode(true)
  const cloneTwo = slidsCollection[5].cloneNode(true)
  for(let i = 0; i < slidsCollection.length; i++) {
    slidContent.removeChild(slidsCollection[i]);
  }
  slidContent.appendChild(cloneOne)
  slidContent.insertBefore(cloneTwo, cloneOne)
  slidContent.insertBefore(cloneThree, cloneOne)
}

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

function funcDistributorOne (direction) {
  const slidArray = [...document.getElementsByClassName('text_slid_block')];
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

function some (direction) {
  if (index === 0 && direction === 'left') {
    index = 4;
  } else if (direction === 'left') {
    index = index - 1
  }

  if (index === 4 && direction === 'right') { 
    index = 0
  } else if (direction === 'right') {
    index = index + 1;
  }
}

function funcDistributorTwo (direction) {
  const slidArray = [...document.getElementsByClassName('text_slid_block')];
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

leftElem ()
startState ()

slidBottomRight.addEventListener('click', () => {
  funcDistributorOne('right')
  some ('right')
})

slidBottomLeft.addEventListener('click', () => {
  funcDistributorTwo('left')
  some ('left')
});





