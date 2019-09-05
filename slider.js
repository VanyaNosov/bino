let textSlidBlockOne = document.getElementById('slid_text_one');
let textSlidBlockTwo = document.getElementById('slid_text_two');
const slidContent = document.getElementById('slid_content');
const slidBottomLeft = document.getElementById('slid_button_block_left');
const slidBottomRight = document.getElementById('slid_button_block_right');
let slid = false;
// function slidStarterRight(ONE,slide) {
//   const cloneOne = slide.cloneNode(true);
//   const slidArray = document.getElementsByClassName('text_slid_block');
//   if(ONE === 1) {
//     slidContent.insertBefore(cloneOne, slidArray[0]);
    
//   }else {
//     slidContent.appendChild(cloneOne);
//   }

// }

function leftElem () {
  const cloneOne = textSlidBlockTwo.cloneNode(true);
  const slidArray = document.getElementsByClassName('text_slid_block');
  slidContent.insertBefore(cloneOne, slidArray[0]);
  // slidArray[0].style.margin = '0 0 0 -100%';
}

leftElem ()

// function someTwo (direction) {
//   const slidArray = document.getElementsByClassName('text_slid_block');
//   if(direction === 'last') {
//     slidContent.removeChild(slidArray[slidArray.length - 1])
//   }else {
//     slidContent.removeChild(slidArray[0])
//   } 
// }

// function some (direction, slide) {
//   const cloneOne = slide.cloneNode(true);
//   const slidArray = document.getElementsByClassName('text_slid_block');
//   if(direction === 'back') {
//     slidContent.insertBefore(cloneOne, slidArray[0]);
//   }else {
//     slidContent.appendChild(cloneOne);
//   } 
// }

function some (direction, slide) {
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
  if(!slid) {
    some('back', textSlidBlockOne);
    slid = false;
    return;
  }else {
    some('up', textSlidBlockOne);
    slid = true;
    return;
  }
})




// if(direction === 'back') {
  
// }else {
//   slidContent.appendChild(cloneOne);
// } 



// function lastAndStarterRight(slide) {
//   const cloneOne = slide.cloneNode(true);
//   const slidArray = document.getElementsByClassName('text_slid_block');
//     slidContent.insertBefore(cloneOne, slidArray[0]);
// }

// function aut (slide) {
//   const cloneOne = slide.cloneNode(true);
//   slidContent.appendChild(cloneOne);
// }

// function deletionFuncLast () {
//   const slidArray = document.getElementsByClassName('text_slid_block');
//   slidContent.removeChild(slidArray[slidArray.length - 1])
// }

// function deletionFuncFirst () {
//   const slidArray = document.getElementsByClassName('text_slid_block');
//   slidContent.removeChild(slidArray[0])
// }

    // slidStarterRight(1, textSlidBlockOne)
    // leftElem ()
    // slidStarterRight(1)
    // leftAndRight('ivan', textSlidBlockOne);
    // slidStarterRight(2,textSlidBlockOne)
    // leftElem ()
    // slidStarterRight(2)
    // leftAndRight('taran', textSlidBlockOne);
// function slidLast(ONE) {
//   const slidArray = document.getElementsByClassName('text_slid_block');
  
// }

// function lastRight(last) {
//   const cloneOne = textSlidBlockOne.cloneNode(true);
//   if(last === 1) {
//     slidContent.appendChild(cloneOne);
//   }
// }


// function leftAndRight (direction, slide) {
//   const cloneOne = slide.cloneNode(true);
//   const slidArray = document.getElementsByClassName('text_slid_block');
//   if(direction === "ivan") {
//     slidContent.insertBefore(cloneOne, slidArray[0]);
//     cloneOne.style.margin = '0 0 0 -100%';
//   }
// }



    // lastRight(1)
    // deleteLast(1)
    // lastAndStarterRight(1, 2)

  // deleteLast(1)
    // lastAndStarterRight(2, 2)
    // lastRight(1)


// function deleteLast (last) {
//   const slidArray = document.getElementsByClassName('text_slid_block');
//   if(last === 1) {
//     slidContent.removeChild(textSlidBlockOne);
//   }
// }

// function lastAndStarterRight(name, position) {
//   const slidArray = document.getElementsByClassName('text_slid_block');
//   if(name === 1) {
//     slidContent.insertBefore(textSlidBlockTwo, slidArray[0]);
//   }
//   if(name === 2) {  
//     slidContent.insertBefore(textSlidBlockOne, slidArray[0]);
//   }
// }


// function styleOne () {
//   const slidArray = document.getElementsByClassName('text_slid_block');
//   slidArray[0].style.margin = '0 0 0 50%';
//   slidArray[0].style.transform = "translate(-50%)";
//   console.log(slidArray[0])
// }

// styleOne()
