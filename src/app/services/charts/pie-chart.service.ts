import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class PieChartService {

  buildPieChart(series: number[], labels: string[], height?:any) {
    return {
      labels: labels,
      series: series,
      chart: {
        width: '100%',
        height: height || 450,
        type: "pie"
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
