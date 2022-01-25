import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AwTagsComponent } from './aw-tags.component';

@NgModule({
  declarations: [
    AwTagsComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [AwTagsComponent]
})
export class AwTagsModule { }
