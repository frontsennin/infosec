import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAssessmentPageComponent } from './new-assessment-page.component';
import { NewAssessmentPageRoutingModule } from './new-assessment-page-routing.module';
import { FormsModule } from '@angular/forms';
import { AssessmentFormModule } from 'src/app/shared/layout/assessment-form/assessment-form.module';


@NgModule({
  imports: [
    CommonModule,
    NewAssessmentPageRoutingModule,
    FormsModule,
    AssessmentFormModule
  ],
  declarations: [NewAssessmentPageComponent]
})
export class NewAssessmentPageModule { }
