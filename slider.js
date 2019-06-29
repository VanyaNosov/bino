const textSlidBlockOne = document.getElementById('slid_text_one');
const textSlidBlockTwo = document.getElementById('slid_text_two');
const slidContent = document.getElementById('slid_content');
const textSlidBlockOneClone = textSlidBlockOne.cloneNode(textSlidBlockTwo);
const insertBefore = slidContent.insertBefore(textSlidBlockOneClone, textSlidBlockOne);
const slidBottomRight = document.getElementById('slid_button_block_right');
let slid = false;
slidBottomRight.addEventListener('click', () => {
  if (!slid) {
    textSlidBlockOne.style.left = '-500px';
    textSlidBlockTwo.style.left = '25%';
    slid = true;
    return;
  }else {
    textSlidBlockTwo.style.left = '-500px';
    textSlidBlockOne.style.left = '25%'; 
    slid = false;
    return;
  }
})
