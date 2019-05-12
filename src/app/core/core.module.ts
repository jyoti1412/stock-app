import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateDiffPipe } from './pipes/date-diff.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DateDiffPipe],
  exports: [DateDiffPipe]
})
export class CoreModule { }
