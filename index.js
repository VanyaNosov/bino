var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
const header_top = document.getElementById('header_top')

function vanya () {
    if (scrollTop > 820) {
        header_top.style.top = "0%"; 
        header_top.style.opacity = "1";
        console.log(header_top);
        console.log(scrollTop);
    }else {
        header_top.style.top = "-92%"; 
        header_top.style.opacity = "0";
    }
};
vanya();

