let textSlidBlockOne = document.getElementById('slid_text_one');
let textSlidBlockTwo = document.getElementById('slid_text_two');
const slidContent = document.getElementById('slid_content');
const slidBottomLeft = document.getElementById('slid_button_block_left');
const slidBottomRight = document.getElementById('slid_button_block_right');
const textSlidBlockOneClone = textSlidBlockOne.cloneNode(true);
const textSlidBlockTwoClone = textSlidBlockTwo.cloneNode(true);
const addItemOne = slidContent.appendChild(textSlidBlockOneClone)
const addItemTwo = slidContent.appendChild(textSlidBlockTwoClone)
let slid = false;
addItemOne.id = 'slidOneClone';
addItemTwo.id = 'slidTwoClone';
addItemOne.style.left = '-75%';
addItemOne.style.top = '50%'
addItemTwo.style.left = '-75%';
addItemTwo.style.top = '50%'
function slidStarterRight(ONE) {
  const slidArray = document.getElementsByClassName('text_slid_block');
  if(ONE === 1) {
    slidContent.insertBefore(textSlidBlockTwo, slidArray[0]);
  }
  if(ONE === 2) {  
    slidContent.insertBefore(textSlidBlockOne, slidArray[0]);
  }
}

function slidStarterLeft(ONE) {
  const slidArray = document.getElementsByClassName('text_slid_block');
  if(ONE === 3) {
    slidContent.insertBefore(addItemTwo, slidArray[0]);
  }

  if(ONE === 4) {  
    slidContent.insertBefore(addItemOne, slidArray[0]);
  }
}

function delOneContainer () {
  slidContent.removeChild(addItemOne)
  slidContent.removeChild(addItemTwo)
}

function delTwoContainer () {
  slidContent.removeChild(textSlidBlockOne)
  slidContent.removeChild(textSlidBlockTwo)
}


slidBottomRight.addEventListener('click', () => {
  if(!slid) {
    slidStarterRight(1)
    // delTwoContainer ()
    // deoTwo()
    textSlidBlockOne.style.left = '-100%';
    textSlidBlockTwo.style.left = '25%'; 
    slid = true;
    return;
  }else {
    slidStarterRight(2)
    // delTwoContainer ()
    // deoTwo()
    textSlidBlockTwo.style.left = '-100%';
    textSlidBlockOne.style.left = '25%'; 
    slid = false;
    return;
  }
})

slidBottomLeft.addEventListener('click', () => {
  if(!slid) {
    slidStarterLeft(3)
    // deoOne()
    addItemOne.style.left = '100%';
    addItemTwo.style.left = '25%'; 
    slid = true;
    return;
  }else {
    slidStarterLeft(4)
    // deoOne()
    addItemTwo.style.left = '100%';
    addItemOne.style.left = '25%'; 
    slid = false;
    return;
  }
})


// function delTwoContainer () {
//   const slidArray = document.getElementsByClassName('text_slid_block');
//   if(slidArray[0] === addItemOne) {
//     textSlidBlockTwo.style.display = 'none';
//     addItemTwo.style.display = 'inline';
//     addItemTwo.style.left = '25%';
//     slidContent.insertBefore(addItemTwo, slidArray[3]);
//   }else {
//     textSlidBlockOne.style.display = 'none';
//     addItemOne.style.display = 'inline';
//     addItemOne.style.left = '25%';
//     slidContent.insertBefore(addItemOne, slidArray[4]);
//   }
// }

// function deoOne() {
//   const slidArray = document.getElementsByClassName('text_slid_block');
//   if(slidArray[1] || slidArray[2] === textSlidBlockOne) {
//     textSlidBlockOne.style.display = 'none';
//     addItemOne.style.display = 'inline';
//     addItemOne.style.left = '25%'; 
//     slidContent.insertBefore(addItemOne, textSlidBlockOne);
//   }else {
//     textSlidBlockTwo.style.display = 'none';
//     addItemTwo.style.display = 'inline';
//     addItemTwo.style.left = '25%'; 
//     slidContent.insertBefore(addItemTwo, textSlidBlockTwo);
//   }
// }

// function deoTwo() {
//   const slidArray = document.getElementsByClassName('text_slid_block');
//   if(slidArray[3] || slidArray[4] === addItemOne) {
//     addItemOne.style.display = 'none';
//     textSlidBlockOne.style.display = 'inline';
//     textSlidBlockOne.style.left = '25%';
//     slidContent.insertBefore(textSlidBlockOne, addItemOne);
//   }else {
//     textSlidBlockTwo.style.display = 'inline';
//     addItemTwo.style.display = 'none';
//     addItemTwo.style.left = '25%'; 
//     slidContent.insertBefore(textSlidBlockTwo, addItemTwo);
//   }
// }

// const textSlidBlockTwo2 = document.getElementById('slid_text_two-2');
// const textSlidBlockOneClone = document.getElementById('slid_text_one_clone');

// const insertBefore = slidContent.insertBefore(textSlidBlockOne, textSlidBlockTwo);
// let yd;
// let pd;
// function dasd () {
//   slidStarter()
//   yd = insertBefore;
//   pd = first;
//   yd.style.transition = '0.6s'
//   yd.style.left = '-200px'
//   first.style.left = '25%'
//   console.log(yd)
//   console.log(pd)
// }

// function slidStarte () {
//   insertBefore = slidContent.insertBefore(textSlidBlockTwo, textSlidBlockOne);
  
//   // first = slidContent.firstElementChild;
//   console.log(insertBefore)
//   // return insertBefore;

//     // const insertBefore = slidContent.replaceChild(textSlidBlockTwo, textSlidBlockOne);
//     // textSlidBlockTwo.style.left = '25%'; 
// }

  // dasd ()



// function slidStarter () {
//   slidBottomRight.addEventListener('click', () => {
//     if(!slid) {
//       textSlidBlockOne.style.left = '-500px';
//       textSlidBlockTwo.style.left = '25%'; 
//       slid = true;
//       return;
//     }else {
//       textSlidBlockTwo.style.left = '-500px';
//         textSlidBlockOne.style.left = '25%'; 
//         slid = false;
//         return;
//     }
//   })
// }


// slidBottomRight.addEventListener('click', () => {
//   if (!slid) {
//     textSlidBlockOne.style.left = '-500px';
//     textSlidBlockTwo.style.left = '25%';
//     slidContent.removeChild(textSlidBlockOne);
//     slid = true;
//     return;
//   }else {
//     textSlidBlockTwo.style.left = '-500px';
//     textSlidBlockOne.style.left = '25%'; 
//     slid = false;
//     return;
//   }
// })
