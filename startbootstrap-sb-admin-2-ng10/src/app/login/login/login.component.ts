import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  existingBodyClassName = '';

  constructor() { }

  ngOnInit(): void {
    this.existingBodyClassName = document.body.className;
    document.body.className = 'bg-gradient-primary'; // 進入此頁時新增自訂class
  }

  ngOnDestroy(): void {
    document.body.className = this.existingBodyClassName; // 離開此頁時移除class
  }
}
