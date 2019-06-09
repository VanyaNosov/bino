const textSlidBlockOne = document.getElementById('slid_text_one');
const textSlidBlockTwo = document.getElementById('slid_text_two');
const slidBottomRight = document.getElementById('slid_button_block_right');
slidBottomRight.addEventListener('click', () => {
  textSlidBlockTwo.style.display = 'inline'
  textSlidBlockOne.style.left = '-500px';
  textSlidBlockTwo.style.left = '25%';
})