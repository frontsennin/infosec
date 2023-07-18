import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule { }
