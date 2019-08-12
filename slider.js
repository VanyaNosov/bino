const textSlidBlockOne = document.getElementById('slid_text_one');
const textSlidBlockTwo = document.getElementById('slid_text_two');
// const textSlidBlockTwo2 = document.getElementById('slid_text_two-2');
const slidContent = document.getElementById('slid_content');
// const textSlidBlockOneClone = document.getElementById('slid_text_one_clone');
// const textSlidBlockOneClone = textSlidBlockOne.cloneNode(textSlidBlockTwo);
// const insertBefore = slidContent.insertBefore(textSlidBlockOne, textSlidBlockTwo);

const slidBottomRight = document.getElementById('slid_button_block_right');
let slid = false;

function slidStarter(ONE) {
  if(ONE === 1) {
    slidContent.insertBefore(textSlidBlockTwo, textSlidBlockOne);
  }else {
    console.log('2')
  }
}

slidBottomRight.addEventListener('click', () => {
      if(!slid) {
      textSlidBlockOne.style.left = '-100%';
      textSlidBlockTwo.style.left = '25%'; 
      slidStarter(1)
      slid = true;
      return;
    }else {
      textSlidBlockTwo.style.left = '100%';
      textSlidBlockOne.style.left = '25%'; 
      slidStarter(2)
        slid = false;
        return;
    }
  })

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
