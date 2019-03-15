const header_top = document.getElementById('header_top');
window.addEventListener("scroll",() => vanya());

function vanya () {
    if (window.pageYOffset > 820) {
        header_top.style.top = "0%"; 
        header_top.style.opacity = "1";
    }else {
        header_top.style.top = "-92%"; 
        header_top.style.opacity = "0";
    }
};

let buttom_top = document.getElementById('buttom_slider1').onclick = scrollBottom;
let bottom_bottom = document.getElementById('buttom_slider2').onclick = scrollBottom_bottom;

let scrollValueTop = 0;

function scrollBottom () {
    const vanyacha = document.getElementById('content');
    scrollValueTop = scrollValueTop - 250;
    buttom_top = vanyacha.style.top = scrollValueTop + 'px';
}

let scrollValueButtom = 0;

function scrollBottom_bottom () {
    const vanyacha = document.getElementById('content');
    scrollValueButtom = scrollValueButtom - 250;
    bottom_bottom = vanyacha.style.bottom = scrollValueButtom + 'px';
}














