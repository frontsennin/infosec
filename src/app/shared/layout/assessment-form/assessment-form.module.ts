import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentFormComponent } from './assessment-form.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [AssessmentFormComponent],
  exports: [AssessmentFormComponent],
})
export class AssessmentFormModule { }
