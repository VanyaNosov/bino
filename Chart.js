const chart1 = document.getElementById("c1");
const statusOne = document.getElementById("Status_Favourites");
const statusTwo = document.getElementById("Status_Posts_Last_24_Hours");
const statusThree = document.getElementById("Status_Total_Posts");
const statusFour= document.getElementById("Status_Campaigns");
const statusFive = document.getElementById("Status_Amazing_Features");
const OffButton = document.getElementById("off_button");
const body = document.getElementById("body");
const overflow = document.createElement('div');
let tittleChart = document.getElementById("tittle_chart");



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

chart1.style.display = 'none';

function ofChart () {
    chart1.style.display = 'none';
    overflow.style.display = 'none';
    body.style.position = '';
    body.style.overflow = 'visible';
}

OffButton.addEventListener('click', () => {
    ofChart()
})

document.addEventListener('keydown', function(event) {
    if(event.keyCode === 27) {
        ofChart()
    }
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
    overflow.addEventListener('click', () => {
        ofChart()
    })
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


