import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartCardComponent } from './chart-card.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  imports: [
    CommonModule,
    NgApexchartsModule,

  ],
  declarations: [ChartCardComponent],
  exports: [ChartCardComponent],
})
export class ChartCardModule { }
