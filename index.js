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
const chart1 = document.getElementById("c1");
const statusOne = document.getElementById("Status_Favourites");
const statusTwo = document.getElementById("Status_Posts_Last_24_Hours");
const statusThree = document.getElementById("Status_Total_Posts");
const statusFour= document.getElementById("Status_Campaigns");
const statusFive = document.getElementById("Status_Amazing_Features");
const DisabledButton = document.getElementById("check_in_button");
const OffButton = document.getElementById("off_button");
const body = document.getElementById("body");
const overflow = document.createElement('div');
const UF = [
    [1,3,5,6,8,9,5,3,2,4,6,7],
    [1,3,5,6,8,9,5,3,2,4,6,7]
]
const PLH = [
    [8,2,8,10,2,4,1,5,9,2,4,5],
    [5,3,5,2,9,4,5,8,6,10,3,4]
]
const TP = [
    [4,7,3,8,8,7,3,6,1,5,9,10],
    [5,9,2,3,9,4,8,6,8,3,2,5]
]
const Campaigns = [
    [4,1,9,10,3,8,2,3,8,6,3,5],
    [6,3,5,6,8,9,5,3,2,4,6,7]
]
const AF = [
    [10,2,7,10,8,9,5,3,2,4,6,7],
    [7,3,5,6,8,9,5,3,2,4,6,7]
]

let tittleChart = document.getElementById("tittle_chart");
let Input = document.getElementsByClassName('info_check_in');
let inputNam = document.getElementById("Name");
let inputEm = document.getElementById("Email");

chart1.style.display = 'none';

OffButton.addEventListener('click', () => {
    chart1.style.display = 'none';
    overflow.style.display = 'none';
    body.style.position = '';
    body.style.overflow = 'visible';
})

function generateData (type) {
    switch (type) {
        case 'one': type = UF;
        break;

        case 'two': type = PLH;
        break;

        case 'three': type = TP;
        break;

        case 'foure': type = Campaigns;
        break;

        case 'five': type = AF;
        break;
    }
    chart1.style.display = "inline-block";
    chartOnStyle();
    modal(); 
    return {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: type,
    };
} 

function modal() {
    overflow.className = 'overflow';
    body.style.position = 'relative';
    document.body.appendChild(overflow);
    overflow.style.display = 'block';
}

function chartOnStyle () {
    body.style.overflow = 'hidden';
    body.style.zIndex = '100';
}


statusOne.addEventListener('click', () => {
    chart(generateData('one'));
    tittleChart.innerHTML = 'User Favourites';
})

statusTwo.addEventListener('click', () => {
    chart(generateData('two'));
    tittleChart.innerHTML = 'Posts Last 24 Hours';
})

statusThree.addEventListener('click', () => {
    chart(generateData('three'));
    tittleChart.innerHTML = 'Total Posts';
})

statusFour.addEventListener('click', () => {
    chart(generateData('foure'));
    tittleChart.innerHTML = 'Campaigns';
})

statusFive.addEventListener('click', () => {
    chart(generateData('five'));
    tittleChart.innerHTML = 'Amazing Features';
})



function chart (chartStatistics) {
    const options = {
        seriesBarDistance: 15
    };

    const responsiveOptions = [
        ['screen and (min-width: 641px) and (max-width: 1024px)', {
            seriesBarDistance: 10,
            axisX: {
            labelInterpolationFnc: function (value) {
                return value;
            }
        }
    }],
        ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
            labelInterpolationFnc: function (value) {
                return value[0];
            }
        }
    }]
];
    new Chartist.Bar('.ct-chart', chartStatistics, options, responsiveOptions);
}

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
    
    if(ValidatorEmail(e.Email.value)) {
        inputEm.style.borderBottom = '2px solid #32CD32';
    }else {
        inputEm.style.borderBottom = '2px solid #C0C0C0';
    }

    if(e.Name.selectionEnd > 5) {
        inputNam.style.borderBottom = '2px solid #32CD32';
    }else {
        inputNam.style.borderBottom = '2px solid #C0C0C0';
    }
}

inputNam.addEventListener('input', () => {InputValidator(Input)})
inputEm.addEventListener('input', () => {InputValidator(Input)})















