export const heatMapChartConstructor = {
  buildHeatMapChart(
    series: any[],
    height?: any
  ) {
    return {
      series: series,
      chart: {
        width: '100%',
        height: height || 450,
        type: 'heatmap',
      },
      plotOptions: {
        heatmap: {
          shadeIntensity: 0.5,
          colorScale: {
            ranges: [
              {
                from: -30,
                to: 5,
                color: '#5D30A5',
              },
              {
                from: 6,
                to: 20,
                color: '#F32735',
              },
              {
                from: 21,
                to: 45,
                color: '#ED8322',
              },
              {
                from: 46,
                to: 55,
                color: '#6ACBD4',
              },
            ],
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        show: false,
      },
      legend: {
        show: false
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
    };
  },
};
