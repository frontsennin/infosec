import { ChartType } from "ng-apexcharts";

export const pieChartConstructor = {

  buildPieChart(series: number[], labels: string[], chartType: ChartType, height?:any) {
    return {
      labels: labels,
      series: series,
      chart: {
        width: '100%',
        height: height || 450,
        type: chartType
      },
      legend: {
        position: 'bottom'
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ],
      tooltip: {
        followCursor: false,
      },
      theme: {
        palette: 'palette5',
      },
    };
  }
}
