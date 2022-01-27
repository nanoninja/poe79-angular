import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [
    PanelComponent,
    TabComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [
    PanelComponent,
    TabComponent
  ]
})
export class AwTabsModule { }
