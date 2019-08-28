let textSlidBlockOne = document.getElementById('slid_text_one');
let textSlidBlockTwo = document.getElementById('slid_text_two');
const slidContent = document.getElementById('slid_content');
const slidBottomLeft = document.getElementById('slid_button_block_left');
const slidBottomRight = document.getElementById('slid_button_block_right');
let slid = false;
function slidStarterRight(ONE) {
  const slidArray = document.getElementsByClassName('text_slid_block');
  if(ONE === 1) {
    slidContent.insertBefore(textSlidBlockTwo, slidArray[0]);
  }
  if(ONE === 2) {  
    slidContent.insertBefore(textSlidBlockOne, slidArray[0]);
  }
}

function lastRight(last) {
  const cloneOne = textSlidBlockOne.cloneNode(true);
  if(last === 1) {
    slidContent.appendChild(cloneOne);
  }
}

slidBottomRight.addEventListener('click', () => {
  if(!slid) {
    slidStarterRight(1)
    lastRight(1);
    slid = true;
    return;
  }else {
    slidStarterRight(2)
    lastRight(1);
    slid = false;
    return;
  }
})

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
