import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentDetailPageComponent } from './assessment-detail-page.component';
import { AssessmentDetailPageRoutingModule } from './assessment-detail-page-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableModule } from 'src/app/shared/layout/table/table.module';
import { AssessmentInfoComponent } from './components/assessment-info/assessment-info.component';
import { AnswersTableComponent } from './components/answers-table/answers-table.component';
import { TemplatesTableComponent } from './components/templates-table/templates-table.component';

const components = [
  AssessmentDetailPageComponent,
  AssessmentInfoComponent,
  AnswersTableComponent,
  TemplatesTableComponent
]

@NgModule({
  imports: [
    CommonModule,
    AssessmentDetailPageRoutingModule,
    FontAwesomeModule,
    TableModule
  ],
  declarations: components
})
export class AssessmentDetailPageModule { }
