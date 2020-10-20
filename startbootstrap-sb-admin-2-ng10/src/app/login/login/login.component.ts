import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  existingBodyClassName = '';

  constructor(private router: Router, private route: ActivatedRoute) { } // 使用Router服務元件要先DI(注入)

  ngOnInit(): void {
    this.existingBodyClassName = document.body.className;
    document.body.className = 'bg-gradient-primary'; // 進入此頁時新增自訂class
  }

  ngOnDestroy(): void {
    document.body.className = this.existingBodyClassName; // 離開此頁時移除class
  }

  doLogin() {
    localStorage.setItem('token', '123123123213'); // 預設token以進行登入驗證的測試
    this.router.navigateByUrl(this.route.snapshot.queryParamMap.get('returnUrl')); // 取得當前URL所帶的returnUrl參數
  }
}
