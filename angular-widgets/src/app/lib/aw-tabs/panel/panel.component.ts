import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from './../tab/tab.component';

@Component({
  selector: 'aw-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements AfterContentInit {

  @ContentChildren(TabComponent)
  tabs!: QueryList<TabComponent>;

  constructor() { }

  ngAfterContentInit(): void {
    console.log(this.tabs);
  }

  onSelect(tab: TabComponent): void {
    this.tabs.forEach((tab: TabComponent) => tab.selected = false);  
    tab.selected = true;
  }
}
