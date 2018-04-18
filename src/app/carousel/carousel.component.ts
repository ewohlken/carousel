import { Component, QueryList, ViewChild, ContentChildren, OnInit, ElementRef, HostListener } from '@angular/core';

import { CarouselItemComponent } from '../carousel-item/carousel-item.component'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @ContentChildren(CarouselItemComponent) carouselItems: QueryList<CarouselItemComponent>;
  @ViewChild('carousel') carousel: ElementRef;

  scrollbarWidth: number;
  offset = 1;
  itemWidth: number;
  width: number;

  constructor(private el: ElementRef) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.el.nativeElement.style.height = this.carousel.nativeElement.clientHeight + 'px';
    
    setTimeout(() => {
      this.setItemWidth();
      this.
    })
  }

  setItemWidth() {
    this.itemWidth = this.carouselItems.first.width;
  }



  scrollHandler($event: EventTarget) {
    console.log(this.carousel.nativeElement.scrollLeft);

    if (this.carousel.nativeElement.scrollLeft > (this.offset * this.itemWidth)) {
      
    }


  }

}
