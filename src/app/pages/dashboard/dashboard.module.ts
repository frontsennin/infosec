import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChartCardModule } from 'src/app/shared/layout/chart-card/chart-card.module';
import { ListCardModule } from 'src/app/shared/layout/list-card/list-card.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartCardModule,
    ListCardModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
