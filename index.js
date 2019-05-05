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

buttom_top1.addEventListener('click', () => {
    buttom_slider_c1.style.backgroundColor = 'e74c3c';
    buttom_slider_c2.style.backgroundColor = '#3e3e3e';
    buttom_slider_c3.style.backgroundColor = '#3e3e3e';
    vanyacha.style.transition =  0.8 + 's';
    vanyacha.style.top = 0 + 'px';
    vanyacha.style.top = 0 + 'px';
});

buttom_top2.addEventListener('click', () => {  
    buttom_slider_c2.style.backgroundColor = 'e74c3c';
    buttom_slider_c1.style.backgroundColor = '#3e3e3e';
    buttom_slider_c3.style.backgroundColor = '#3e3e3e';
    vanyacha.style.transition =  0.4 + 's';
    vanyacha.style.top = 0 + 'px';  
    vanyacha.style.top =  - 500 + 'px';
});

buttom_top3.addEventListener('click', () => {
    buttom_slider_c3.style.backgroundColor = 'e74c3c';
    buttom_slider_c2.style.backgroundColor = '#3e3e3e';
    buttom_slider_c1.style.backgroundColor = '#3e3e3e';
    vanyacha.style.transition =  0.8 + 's';
    vanyacha.style.top = 0 + 'px';  
    vanyacha.style.top =  - 1000  + 'px';
});

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
    slidContentOne2.style.opacity = '0'
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
    slidContentOne2.style.opacity = '0'
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

function ReplaceEmail () {
    let Email = document.getElementById("Email").value;
    console.log(Email.value);
    // Email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
}
ReplaceEmail();

function button () {
    const DisabledButton = document.getElementById("check_in_button");
    DisabledButton.style.backgroundColor = "black";
}
button();

// const vanyacha = document.getElementById('content');

// let buttom_top1 = document.getElementById('buttom_slider1').addEventListener('click', () =>  changePosition('firstButton'));
// let buttom_top2 = document.getElementById('buttom_slider2').addEventListener('click', () =>  changePosition('lastButton'));
// let buttom_top3 = document.getElementById('buttom_slider3').addEventListener('click', () =>  changePosition('aaaaaButton'));

// function changePosition (firstButton) {
//     if (firstButton === 'firstButton') {
//         vanyacha.style.top = 0 + 'px';
//     };

//     if (firstButton === 'lastButton') {
//         vanyacha.style.top = 0 + 'px';  
//         vanyacha.style.top = - 500 + 'px';
//     };

//     if (firstButton === 'aaaaaButton') {
//         vanyacha.style.top = 0 + 'px';
//         vanyacha.style.top = - 1000 + 'px';
//     };
// };


// let buttom_top1 = document.getElementById('buttom_slider1').addEventListener('click', () => {
//     vanyacha.style.top = 0 + 'px';
//     vanyacha.style.top = 0 + 'px';
// });

// let buttom_top2 = document.getElementById('buttom_slider2').addEventListener('click', () => {
//     vanyacha.style.top = 0 + 'px';  
//     vanyacha.style.top =  - 500 + 'px';
// });

// let buttom_top3 = document.getElementById('buttom_slider3').addEventListener('click', () => {
//     vanyacha.style.top = 0 + 'px';  
//     vanyacha.style.top =  - 1000  + 'px';
// });












// let buttom_top = document.getElementById('buttom_slider1').onclick = scrollBottom(0,500);
// let bottom_bottom = document.getElementById('buttom_slider2').onclick = scrollBottom(1000,0);


// function scrollBottom (first,last) {
//     const vanyacha = document.getElementById('content');
//     last = 500;
//     first = 1000;

//     if(last) {
//         vanyacha.style.bottom = last + 'px';
//     }

//     if() {
//         vanyacha.style.bottom = first + 'px';
// }

// let scrollValueTop = 0;

// function scrollBottom () {
//     const vanyacha = document.getElementById('content');
//     scrollValueTop = scrollValueTop - 250;
//     buttom_top = vanyacha.style.top = scrollValueTop + 'px';
// }

// let scrollValueButtom = 0;

// function scrollBottom_bottom () {
//     const vanyacha = document.getElementById('content');
//     scrollValueButtom = scrollValueButtom - 250;
//     bottom_bottom = vanyacha.style.bottom = scrollValueButtom + 'px';
// }














