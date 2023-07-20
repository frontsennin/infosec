import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewAssessmentPageComponent } from './new-assessment-page.component';


const routes: Routes = [
    {
        path: '',
        component: NewAssessmentPageComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewAssessmentPageRoutingModule { }
