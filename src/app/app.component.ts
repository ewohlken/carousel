import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items : {
    header: string;
    summary: string;
    url: string;
  }[] = [];

  constructor() {
    for(let i = 0; i < 10; i++) {
      this.items.push({
        header: 'Heading',
        summary: 'Lorem Ipsum Dolor',
        url: 'http://via.placeholder.com/250x150'
      });
    }
  }
}
