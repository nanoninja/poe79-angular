import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwRangeComponent } from './aw-range/aw-range.component';
import { AwPaletteComponent } from './aw-palette.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AwRangeComponent,
    AwPaletteComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AwRangeComponent,
    AwPaletteComponent
  ]
})
export class AwPaletteModule { }
