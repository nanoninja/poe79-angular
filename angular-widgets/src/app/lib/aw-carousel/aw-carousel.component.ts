import { AwCarouselImgModel } from './aw-carousel-img.model';
import { Component, Input, OnInit } from '@angular/core';

import { fadeIn } from './../aw-core/aw-animations';

@Component({
  selector: 'aw-carousel',
  templateUrl: './aw-carousel.component.html',
  styleUrls: ['./aw-carousel.component.scss'],
  animations: [fadeIn]
})
export class AwCarouselComponent implements OnInit {

  @Input()
  images: AwCarouselImgModel[] = [];

  currentPos: number = 0;

  constructor() { }

  ngOnInit(): void { }

  prev(): void {
    if (this.currentPos > 0) {
      this.currentPos--;
    } else {
      this.currentPos = this.images.length - 1;
    }
  }

  next(): void {
    if (this.currentPos < this.images.length -1) {
      this.currentPos++;
    } else {
      this.currentPos = 0;
    }
  }
}
