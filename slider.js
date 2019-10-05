let textSlidBlockOne = document.getElementById('slid_text_one');
let textSlidBlockTwo = document.getElementById('slid_text_two');
let textSlidBlockthree = document.getElementById('slid_text_three ');
let textSlidBlockfoure = document.getElementById('slid_text_foure');
let textSlidBlockfive = document.getElementById('slid_text_five ');
const slidContent = document.getElementById('slid_content');
const slidBottomLeft = document.getElementById('slid_button_block_left');
const slidBottomRight = document.getElementById('slid_button_block_right');
const slidsCollection = [...document.getElementsByClassName('text_slid_block')];
let index = 0;
let nextIndex = 1;
function startState () {
  const cloneOne = slidsCollection[1].cloneNode(true)
  const cloneThree = slidsCollection[0].cloneNode(true)
  const cloneTwo = slidsCollection[4].cloneNode(true)
  slidContent.innerHTML = '';
  slidContent.appendChild(cloneOne)
  slidContent.insertBefore(cloneTwo, cloneOne)
  slidContent.insertBefore(cloneThree, cloneOne)
}

function slideDistribution (direction, slide) {
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

function someTwo (direction) {
  if (index === 0 && direction === 'left') {
    nextIndex = 4;
  } else if (direction === 'left') {
    nextIndex = index - 1
  }
  if (index === 4 && direction === 'right') { 
    nextIndex = 0
  } else if (direction === 'right') {
    nextIndex = index + 1;
  }
  return nextIndex;
}

startState ()

function globalAmin (direction) {
  if(direction === 'right') {
    some ('right')
    const needPutIndex = someTwo('right');
    slideDistribution ('back', slidsCollection[needPutIndex])
  }else {
    some ('left')
    const needPutIndex = someTwo('left');
    slideDistribution ('up', slidsCollection[needPutIndex])
  }
}

slidBottomRight.addEventListener('click', () => {
  globalAmin('right')
})

slidBottomLeft.addEventListener('click', () => {
  globalAmin('left')
});


