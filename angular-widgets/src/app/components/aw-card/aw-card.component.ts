import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aw-card',
  templateUrl: './aw-card.component.html',
  styleUrls: ['./aw-card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void { }

}
