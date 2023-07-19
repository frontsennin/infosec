import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCardComponent } from './list-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListCardComponent],
  exports: [ListCardComponent],
})
export class ListCardModule { }
