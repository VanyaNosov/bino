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