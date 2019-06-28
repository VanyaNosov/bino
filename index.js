const vanyacha = document.getElementById('content');
const buttom_top1 = document.getElementById('buttom_slider1');
const buttom_top2 = document.getElementById('buttom_slider2');
const buttom_top3 = document.getElementById('buttom_slider3');
const buttons = {
    buttom_slider_c1: document.getElementById('buttom_slider_c1'),
    buttom_slider_c2: document.getElementById('buttom_slider_c2'),
    buttom_slider_c3: document.getElementById('buttom_slider_c3'),
}
const slid_content_one = document.getElementById('one_slid');
const slid_content_two = document.getElementById('two_slid');
const slid_content_three = document.getElementById('three_slid');
const buttonsSlidTwo = {
    buttom_slid_one: document.getElementById('buttom_slid_one'),
    buttom_slid_two: document.getElementById('buttom_slid_two'),
    buttom_slid_three: document.getElementById('buttom_slid_three'),
    slidContentOne: document.getElementById("slid_content_one"),
    slidContentTwo: document.getElementById("slid_content_two"),
    slidContentThree: document.getElementById("slid_content_three"),
}

const DisabledButton = document.getElementById("check_in_button");
let Input = document.getElementsByClassName('info_check_in');
let inputNam = document.getElementById("Name");
let inputEm = document.getElementById("Email");

const style = {
    colors: {
      dark_grey: '#3e3e3e',
      bright_red: '#e74c3c',
      light_grayish_blue: '#f4f5f9',
    },
};
const setStyle = (eventOnButton, transition, top) => {
    const {colors} = style;
    const {dark_grey, bright_red} = colors;
    const keys = Object.keys(buttons);
    for(let i = 0; i < keys.length; i++) {
        if(keys[i] === eventOnButton) {
            buttons[keys[i]].style.backgroundColor = bright_red;
        }else {
            buttons[keys[i]].style.backgroundColor = dark_grey;     
        }
    }
    vanyacha.style.transition = transition;
    vanyacha.style.top = top;
}   

buttom_top1.addEventListener('click', () => {
    setStyle('buttom_slider_c1', '0.8s', '0px');
}); 
buttom_top2.addEventListener('click', () => {  
    setStyle('buttom_slider_c2', '0.4s', '-500px');
});
buttom_top3.addEventListener('click', () => {
    setStyle('buttom_slider_c3', '0.8s', '-1000px');
});

const setStyleTwo = (dotButton, image) => {
  const groupDotButton = ['buttom_slid_one', 'buttom_slid_two', 'buttom_slid_three'];
  const groupImage = ['slidContentOne', 'slidContentTwo', 'slidContentThree'];
  const keys = Object.keys(buttonsSlidTwo);

  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === dotButton) {
    buttonsSlidTwo[keys[i]].style.backgroundColor = 'red';
    }

    if (keys[i] !== dotButton && groupDotButton.includes(keys[i])) {
    buttonsSlidTwo[keys[i]].style.backgroundColor = '#f4f5f9';
    }

    if (keys[i] === image) {
    buttonsSlidTwo[keys[i]].style.transition = '1';
    buttonsSlidTwo[keys[i]].style.opacity = '1';
    }

    if (keys[i] !== image && groupImage.includes(keys[i])) {
    buttonsSlidTwo[keys[i]].style.opacity = '0';
    buttonsSlidTwo[keys[i]].style.transition = '0';
    }
  }
}

slid_content_one.addEventListener('click', () => {
  setStyleTwo('buttom_slid_one', 'slidContentOne')
})

slid_content_two.addEventListener('click', () => {
  setStyleTwo('buttom_slid_two', 'slidContentTwo')
})

slid_content_three.addEventListener('click', () => {
  setStyleTwo('buttom_slid_three', 'slidContentThree')
})

const header_top = document.getElementById('header_top');

window.addEventListener("scroll", () => vanya());
function vanya () {
  if (window.pageYOffset > 820) {
    header_top.style.top = "0%"; 
    header_top.style.opacity = "1";
  }else {
    header_top.style.top = "-92%"; 
    header_top.style.opacity = "0";
  }
}

function ValidatorEmail (email) {
  const reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
  return reg.test(email);
}

const validatorObj = {
  Email: false,
  Name: false,
}

function InputValidator (e) {
  if(ValidatorEmail(e.Email.value)) {
    inputEm.style.borderBottom = '2px solid #32CD32';
    validatorObj.Email = true;
  }else {
    inputEm.style.borderBottom = '2px solid #C0C0C0';
    validatorObj.Email = false;
  }

  if(e.Name.selectionEnd > 5) {
    inputNam.style.borderBottom = '2px solid #32CD32';
    validatorObj.Name = true;
  }else {
    inputNam.style.borderBottom = '2px solid #C0C0C0';
    validatorObj.Name = false;
  }
  prv()
}

function prv () {
  if(validatorObj.Email && validatorObj.Name) {
    DisabledButton.style.backgroundColor = 'red';
  }else {
    DisabledButton.style.backgroundColor = '#C0C0C0';
  }
}

inputNam.addEventListener('input', () => {InputValidator(Input)})
inputEm.addEventListener('input', () => {InputValidator(Input)})









