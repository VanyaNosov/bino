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

let vanyac = document.getElementById('buttom_slider1').onclick = scrollBottom;
let vanyac2 = document.getElementById('buttom_slider2').onclick = scrollBottom_bottom;

let bop = 0;

function scrollBottom () {
    const vanyacha = document.getElementById('content');
    bop = bop  - 250;
    vanyac = vanyacha.style.top = bop + 'px';
}

let bottom = 0;

function scrollBottom_bottom () {
    const vanyacha = document.getElementById('content');
    bottom = bottom - 250;
    vanyac2 = vanyacha.style.bottom = bottom + 'px';
}














