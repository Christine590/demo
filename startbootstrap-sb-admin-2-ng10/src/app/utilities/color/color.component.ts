import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  type = 0;
  name = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // 測試網址：http://localhost:4200/#/utilities/color/2?name=Will

    // 舊的寫法，為弱型別any，所以不再使用
    // const p: Params = this.route.snapshot.params;
    // const type = p['type'];

    // 必要參數用 paramMap???
    // this.type = +this.route.snapshot.paramMap.get('type'); // 取得當下參數值
    this.route.paramMap.subscribe(param => {
      this.type = +param.get('type'); // +的用途??? 字串轉型為數字???
    });

    // 非必要參數用 queryParamMap???
    // this.name = this.route.snapshot.queryParamMap.get('name');
    this.route.queryParamMap.subscribe(param => {
      this.name = param.get('name');
    });
  }

}
