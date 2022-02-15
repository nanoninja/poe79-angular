import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'aw-range',
  templateUrl: './aw-range.component.html',
  styleUrls: ['./aw-range.component.scss']
})
export class AwRangeComponent implements OnInit {

  @Input()
  name: string = '';

  @Input()
  value: number = 0;

  @Input()
  min: number = 0;

  @Input()
  max!: number;

  @Output('onRangeChange')
  inputEmitter: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void { }

  onChange(): void {
    this.inputEmitter.emit(this.value);
  }

}
