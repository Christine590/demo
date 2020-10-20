import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit, OnDestroy {

  form: FormGroup;
  data: any = {
    email: '',
    pwd: '',
    rememberMe: true
  };

  existingBodyClassName = '';

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.existingBodyClassName = document.body.className;
    document.body.className = 'bg-gradient-primary';

    this.form = this.fb.group ({
      // 作法一：以email為例 => 可讀性較佳也較好維護
    email: this.fb.control('33', { // 33是預設值
      // updateOn: 'blur', // 填完之後滑鼠移開並點擊他處才會生效 => 進行驗證
      validators: [
        Validators.required,
        Validators.email,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]
    }),
    // 作法二：以密碼為例 => 程式碼精簡但較不好閱讀
    pwd: ['444', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(16)
      ]
    ],
    rememberMe: true
    });
  }

  ngOnDestroy(): void {
    document.body.className = this.existingBodyClassName;
  }

  // 若是傳入 #fg 的參數，型態會是 FormGroupDirective，所以接收型態也要寫 FormGroupDirective
  doLogin(form: FormGroupDirective) {
    if (form.valid) {
      localStorage.setItem('token', '123123123213');
      this.router.navigateByUrl(this.route.snapshot.queryParamMap.get('returnUrl'));
    }
  }

}
