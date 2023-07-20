import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentDetailPageComponent } from './assessment-detail-page.component';


const routes: Routes = [
    {
        path: ':id',
        component: AssessmentDetailPageComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AssessmentDetailPageRoutingModule { }
