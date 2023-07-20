import { Routes } from "@angular/router";

export const systemRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'assessment',
    loadChildren: () => import('.././../pages/assessment-page/assessment-page.module').then(m => m.AssessmentPageModule)
  },
  {
    path: 'new-assessment',
    loadChildren: () => import('.././../pages/new-assessment-page/new-assessment-page.module').then(m => m.NewAssessmentPageModule)
  },
  {
    path: 'assessment-detail',
    loadChildren: () => import('.././../pages/assessment-detail-page/assessment-detail-page.module').then(m => m.AssessmentDetailPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('.././../pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
]
