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
    path: 'home',
    loadChildren: () => import('.././../pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
]
