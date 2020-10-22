import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaiwanIdValidator } from './TaiwanIdValidator';

@Component({
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})

export class Login2Component implements OnInit, OnDestroy {

  form: FormGroup;
  data = {
    users: [
      {
        email: 'user1@example.com',
        pwd: '123123'
      },
      {
        email: 'user2@example.com',
        pwd: '321321'
      }
    ],
  };

  existingBodyClassName = '';

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.existingBodyClassName = document.body.className;
    document.body.className = 'bg-gradient-primary';

    this.form = this.fb.group ({
    //   // 作法一：以email為例 => 可讀性較佳也較好維護
    //   email: this.fb.control('33', { // 33是預設值
    //   // updateOn: 'blur', // 填完之後滑鼠移開並點擊他處才會生效 => 進行驗證
    //   validators: [
    //     Validators.required,
    //     Validators.email,
    //     Validators.minLength(3),
    //     Validators.maxLength(50)
    //   ]
    // }),
    //   // 作法二：以密碼為例 => 程式碼精簡但較不好閱讀
    //   pwd: ['444', [
    //     Validators.required,
    //     Validators.minLength(3),
    //     Validators.maxLength(16)
    //   ]
    // ],

    users: this.fb.array([]), // users是fromGroup的Array
    rememberMe: true
    });

    // this.addUser();　// 初始化後先產生第一組

    // tslint:disable-next-line: prefer-for-of 只是建議用for-of，調整為註解讓他不要出現警告的方法???
    for (let i = 0; i < this.data.users.length; i++) { // 有幾組users
      this.addUser();
    }

    this.form.reset(this.data); // 可帶或不帶預設內容，不帶的話，括號裡面不用寫東西
  }

  addUser() {
    // const宣告表示此時的全域變數是一個常數，不允許再去修改它的值
    const fa = this.form.get('users') as FormArray;
    fa.push( // 在陣列的最後面新增一個子元素，這裡的陣列裡面是多組fromGroup，每個fromGroup是mail與pwd的fromContrl的組合
      this.fb.group({
        email: this.fb.control('', {
          // updateOn: 'blur',
          validators: [
            Validators.required,
            // Validators.email,
            // Validators.minLength(3),
            // Validators.maxLength(50)

            // 示範身分證驗證器
            TaiwanIdValidator,
            Validators.minLength(10),
            Validators.maxLength(10)
          ]
        }),
        pwd: ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
      })
    );
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
