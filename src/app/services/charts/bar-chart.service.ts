import { Injectable } from '@angular/core';
import { colors } from 'src/app/shared/utils/colors';

@Injectable({
  providedIn: 'root',
})
export class BarChartService {
  buildVerticalBarChart(series: number[], labels: string[], height?:any) {
    return {
      series: [
        {
          name: '',
          data: series,
        },
      ],
      colors: colors,
      chart: {
        toolbar: {
          show: false,
        },
        width: '100%',
        height: height || 400,
        type: 'bar',
      },
      plotOptions: {
        show: false,
        bar: {
          distributed: true,

        }
      },
      dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
          colors: ['#fff']
        },
      },

      xaxis: {
        categories: labels,
        position: 'bottom',
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
      title: {
        show: false,
      },
      legend: {
        show: false
      },
    };
  }

  buildHorizontalBarChart(series: any[], labels: any[], height?: any) {
    return {
      series: [{name: '',data: series}],
      chart: {
        toolbar: {
          show: false,
        },
        width: '100%',
        height: height || 500,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          distributed: true,
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: true,
        offsetX: 0,
        dropShadow: {
          enabled: true
        }
      },
      xaxis: {
        categories: labels,
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
  }

  buildStackedHorizontalBarChart(series: any[], labels: any[], height?: any) {
    return {
      series: series,
      chart: {
        type: 'bar',
        toolbar: {
          show: false,
        },
        width: '100%',
        height: height || 500,
        stacked: true,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            total: {
              enabled: true,
              offsetX: 0,
              style: {
                fontSize: '13px',
                fontWeight: 900,
              },
            },
          },
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff'],
      },
      xaxis: {
        categories: labels,
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
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40,
      },
    };
  }
}
