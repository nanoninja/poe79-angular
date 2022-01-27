import { Component, Input, OnInit } from '@angular/core';
import { fadeIn } from './../../aw-core/aw-animations';

@Component({
  selector: 'aw-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  animations: [fadeIn]
})
export class TabComponent implements OnInit {

  @Input() name: string = '';
  @Input() selected: boolean = false;

  constructor() { }

  ngOnInit(): void { }
}
