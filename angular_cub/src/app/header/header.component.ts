import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // sitename = 'hello world';
  @Input() sitename = 'Hello World'; // 當為參數傳出給別人使用
  subtitle = '記載著 Will 在網路世界的學習心得與技術分享';
  counter = 12;

  constructor() {}

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.sitename = 'OK!!';
    // }, 2000);
  }

  changeName($event: MouseEvent): void {
    console.log($event);
    this.counter++;

    if ($event.ctrlKey) {
      this.sitename = 'The Will Will Web';
    }
  }
}
