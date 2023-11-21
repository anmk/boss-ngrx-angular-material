import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstLetterUppercasePipe } from './first-letter-uppercase.pipe';

@NgModule({
  declarations: [
    FirstLetterUppercasePipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FirstLetterUppercasePipe
  ]
})
export class PipeModule { }
