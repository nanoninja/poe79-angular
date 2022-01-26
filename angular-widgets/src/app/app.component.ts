import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { AwCarouselImgModel } from './lib/aw-carousel/aw-carousel-img.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Angular Widgets';

  slides: AwCarouselImgModel[] = [
    new AwCarouselImgModel(
      'Titre 1',
      'Description 1',
      'https://source.unsplash.com/random/1024x768?mountain'
    ),
    new AwCarouselImgModel(
      'Titre 2',
      'Description 2',
      'https://source.unsplash.com/random/1024x768?car'
    ),
    new AwCarouselImgModel(
      'Titre 3',
      'Description 3',
      'https://source.unsplash.com/random/1024x768?beach'
    ),
  ];

  @ViewChild('pageTitle')
  titleRef!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    console.log(this.titleRef.nativeElement.textContent);
  }
}
