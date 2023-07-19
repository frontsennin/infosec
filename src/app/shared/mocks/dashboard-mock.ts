import { PieChartService } from './../../services/charts/pie-chart.service';
import { DashboardCardPosition } from '../enums/dashboard-card-position.enum';
import { pieChartConstructor } from '../utils/pie-chart-constructor';
import { ChartType } from '../enums/chart-type.enum';
import { heatMapChartConstructor } from '../utils/heatmap-chart-constructor';
import { generateRangeData } from '../utils/generate-number-range';
import { negativeBarChartConstructor } from '../utils/negative-bar-chart-constructor';
import { lineChartConstructor } from '../utils/line-chart-constructor';
import { CardType } from '../enums/card-type.enum';

const heatmapList = () => {
  return [
    {
      data: generateRangeData(5, {
        min: -30,
        max: 55,
      }),
    },
    {
      data: generateRangeData(5, {
        min: -30,
        max: 55,
      }),
    },
    {
      data: generateRangeData(5, {
        min: -30,
        max: 55,
      }),
    },
    {
      data: generateRangeData(5, {
        min: -30,
        max: 55,
      }),
    },
    {
      data: generateRangeData(5, {
        min: -30,
        max: 55,
      }),
    },
  ];
};

export const dashboardMock = [
  {
    position: DashboardCardPosition.LEFT,
    cardType: CardType.CHART,
    title: 'Fornecedores',
    subTitle: 'Total',
    listOfcontent: [],
    chartValue: pieChartConstructor.buildPieChart(
      [75],
      [''],
      ChartType.RADIAL_BAR,
      200
    ),
  },
  {
    position: DashboardCardPosition.LEFT,
    cardType: CardType.LIST,
    title: 'Alerta',
    subTitle: '',
    listOfcontent: [
      'Empresa XPTO não está em conformidade com o acordo de segurança proposto. ',
      'Avaliação da Empresa XPTO expirará em 3 dias',
    ],
    chartValue: null,
  },
  {
    position: DashboardCardPosition.LEFT,
    cardType: CardType.CHART,
    title: 'Avaliações',
    subTitle: '',
    listOfcontent: [],
    chartValue: pieChartConstructor.buildPieChart(
      [26, 54, 30],
      ['Completas', 'Em andamento', 'Atrasadas'],
      ChartType.DONUT,
      200
    ),
  },
  {
    position: DashboardCardPosition.CENTER,
    cardType: CardType.CHART,
    title: 'Conformidades de Fornecedores',
    subTitle: 'Empresa 1 x Empresa 2',
    listOfcontent: [],
    chartValue: negativeBarChartConstructor.mountNegativeChart(),
  },
  {
    position: DashboardCardPosition.CENTER,
    cardType: CardType.CHART,
    title: 'Performance de Fornecedores Criticos',
    subTitle: '',
    listOfcontent: [],
    chartValue: lineChartConstructor.mountLineChart(),
  },
  {
    position: DashboardCardPosition.CENTER,
    cardType: CardType.CHART,
    title: 'Risco de Fornecedores',
    subTitle: '',
    listOfcontent: [],
    chartValue: heatMapChartConstructor.buildHeatMapChart(heatmapList(), 250),
  },
  {
    position: DashboardCardPosition.CENTER,
    cardType: CardType.CHART,
    title: 'Performance de Fornecedores Criticos',
    subTitle: '',
    listOfcontent: [],
    chartValue: lineChartConstructor.mountMultipleLineChart(),
  },
  {
    position: DashboardCardPosition.RIGHT,
    cardType: CardType.LIST,
    title: 'Insights',
    subTitle: '',
    listOfcontent: [
      'Melhore o Score por completar NIST',
    ],
    chartValue: null,
  },
  {
    position: DashboardCardPosition.RIGHT,
    cardType: CardType.LIST,
    title: 'HUB SCORE',
    subTitle: '',
    listOfcontent: [
      '789 Empresas',
      'Empresa XPTO acaba de entrar na comunidade',
      'Empresa XPTO está em conformidade com o acordo proposto',
      'Empresa XPTO compartilhou ISO…',
      'Empresa XPTO está com Score de Risco de 345',
    ],
    chartValue: null,
  },
];
