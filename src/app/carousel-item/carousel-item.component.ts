import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css']
})
export class CarouselItemComponent implements OnInit {

  constructor(private el: ElementRef) { }

  public get width(): number {
    return this.el.nativeElement.clientWidth;
  } 

  ngOnInit() {
  }

}
