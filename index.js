const vanyacha = document.getElementById('content');
const buttom_top1 = document.getElementById('buttom_slider1');
const buttom_top2 = document.getElementById('buttom_slider2');
const buttom_top3 = document.getElementById('buttom_slider3');
const buttom_slider_c1 = document.getElementById('buttom_slider_c1');
const buttom_slider_c2 = document.getElementById('buttom_slider_c2');
const buttom_slider_c3 = document.getElementById('buttom_slider_c3');
const slid_content_one = document.getElementById('one_slid');
const slid_content_two = document.getElementById('two_slid');
const slid_content_three = document.getElementById('three_slid');
const slidContentOne2 = document.getElementById("slid_content_one");
const slidContentTwo = document.getElementById("slid_content_two");
const slidContentThree = document.getElementById("slid_content_three");
const OneSlid = document.getElementById("one_slid");
const TwoSlid = document.getElementById("two_slid");
const ThreeSlid = document.getElementById("three_slid");
const DisabledButton = document.getElementById("check_in_button");
let Input = document.getElementsByClassName('info_check_in');
let inputNam = document.getElementById("Name");
let inputEm = document.getElementById("Email");

buttom_top1.addEventListener('click', () => {
    setStyle('buttom_top1', '0.8s', '0px');
});
  
buttom_top2.addEventListener('click', () => {  
    setStyle('buttom_top2', '0.4s', '-500px');
});
  
buttom_top3.addEventListener('click', () => {
    setStyle('buttom_top3', '0.8s', '-1000px');
});
  
const setStyle = (eventOnButton, transition, top) => {
    switch(eventOnButton) {
        case 'buttom_top3':
            buttom_slider_c3.style.backgroundColor = 'e74c3c';
            buttom_slider_c2.style.backgroundColor = '#3e3e3e';
            buttom_slider_c1.style.backgroundColor = '#3e3e3e'; 
            vanyacha.style.transition = transition;
            vanyacha.style.top = top;
            break;
        case 'buttom_top2':
            buttom_slider_c2.style.backgroundColor = 'e74c3c';
            buttom_slider_c1.style.backgroundColor = '#3e3e3e';
            buttom_slider_c3.style.backgroundColor = '#3e3e3e';
            vanyacha.style.transition = transition;
            vanyacha.style.top = top;
            break;
        case 'buttom_top1':
            buttom_slider_c1.style.backgroundColor = 'e74c3c';
            buttom_slider_c2.style.backgroundColor = '#3e3e3e';
            buttom_slider_c3.style.backgroundColor = '#3e3e3e';
            vanyacha.style.transition = transition;
            vanyacha.style.top = top;
            break;
    }
}

slid_content_one.addEventListener('click', function () {
    OneSlid.style.backgroundColor = 'e74c3c';
    TwoSlid.style.backgroundColor = '#f4f5f9';
    ThreeSlid.style.backgroundColor = '#f4f5f9';
    slidContentOne2.style.opacity = "1";
    slidContentTwo.style.opacity = "0";
    slidContentThree.style.opacity = "0";
    slidContentOne2.style.transition = 1 + 's';
    slidContentTwo.style.transition = 0 + 's';
    slidContentThree.style.transition = 0 + 's';
}); 
         
slid_content_two.addEventListener('click', function () {
    TwoSlid.style.backgroundColor = 'e74c3c';
    OneSlid.style.backgroundColor = '#f4f5f9';
    ThreeSlid.style.backgroundColor = '#f4f5f9';
    slidContentOne2.style.opacity = '0';
    slidContentThree.style.opacity = "0";
    slidContentTwo.style.opacity = "1";
    slidContentOne2.style.transition = 0 + 's';
    slidContentTwo.style.transition = 1 + 's';
    slidContentThree.style.transition = 0 + 's';
});

slid_content_three.addEventListener('click', function () { 
    ThreeSlid.style.backgroundColor = 'e74c3c';
    TwoSlid.style.backgroundColor = '#f4f5f9';
    OneSlid.style.backgroundColor = '#f4f5f9';
    slidContentOne2.style.opacity = '0';
    slidContentThree.style.opacity = "1";
    slidContentTwo.style.opacity = "0";
    slidContentOne2.style.transition = 0 + 's';
    slidContentTwo.style.transition = 0 + 's';
    slidContentThree.style.transition = 1 + 's';
});

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

function InputValidator (e) {
    if(e.Name.selectionEnd > 5 && ValidatorEmail(e.Email.value)) {
        DisabledButton.style.backgroundColor = 'red';
    }else {
        DisabledButton.style.backgroundColor = '#C0C0C0';
    }
  
    if(ValidatorEmail(e.Email.value) && e.Name.selectionEnd > 5) {
        inputEm.style.borderBottom = '2px solid #32CD32';
        inputNam.style.borderBottom = '2px solid #32CD32';
    }else {
        inputNam.style.borderBottom = '2px solid #C0C0C0';
        inputEm.style.borderBottom = '2px solid #C0C0C0';
    }
}

inputNam.addEventListener('input', () => {InputValidator(Input)})
inputEm.addEventListener('input', () => {InputValidator(Input)})










