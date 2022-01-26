import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AwCarouselComponent } from './aw-carousel.component';

@NgModule({
  declarations: [
    AwCarouselComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [
    AwCarouselComponent
  ]
})
export class AwCarouselModule { }
