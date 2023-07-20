import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentPageComponent } from './assessment-page.component';
import { AssessmentPageRoutingModule } from './assessment-page-routing.module';
import { TableModule } from 'src/app/shared/layout/table/table.module';

@NgModule({
  imports: [
    CommonModule,
    AssessmentPageRoutingModule,
    TableModule
  ],
  declarations: [AssessmentPageComponent]
})
export class AssessmentPageModule { }
