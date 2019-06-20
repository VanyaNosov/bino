const textSlidBlockOne = document.getElementById('slid_text_one');
const textSlidBlockTwo = document.getElementById('slid_text_two');
const slidBottomRight = document.getElementById('slid_button_block_right');
let dd = false;
slidBottomRight.addEventListener('click', () => {
  if (!dd) {
    textSlidBlockOne.style.left = '-500px';
    textSlidBlockTwo.style.left = '25%';
    textSlidBlockOne.style.left = '100%';
    dd = true;
    return;
  }else {
    textSlidBlockTwo.style.left = '-500px';
    textSlidBlockOne.style.left = '25%'; 
    dd = false;
    return;
  }
})
