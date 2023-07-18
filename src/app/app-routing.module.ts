import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { systemRoutes } from './shared/routes/routes';

@NgModule({
  imports: [
    RouterModule.forRoot(systemRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
