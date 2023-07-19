import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-chart-card',
  templateUrl: './chart-card.component.html',
  styleUrls: ['./chart-card.component.scss']
})
export class ChartCardComponent implements OnInit {

  @ViewChild('chart') chart!: ChartComponent;
  @Input() title!: string;
  @Input() subTitle!: string;
  @Input() chartOptions!: any;

  constructor() { }

  ngOnInit() {
  }

}
