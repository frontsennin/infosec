import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentPageComponent } from './assessment-page.component';
import { AssessmentPageRoutingModule } from './assessment-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AssessmentPageRoutingModule
  ],
  declarations: [AssessmentPageComponent]
})
export class AssessmentPageModule { }
