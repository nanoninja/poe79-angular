import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-widgets';

  @ViewChild('pageTitle')
  titleRef!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    console.log(this.titleRef.nativeElement.textContent);
  }  
}
