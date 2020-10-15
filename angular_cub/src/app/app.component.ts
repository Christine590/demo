import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The Will Will Web';
  keyword = 'test';

  data: any[] = [];
  constructor(private http: HttpClient) {} // 建構式 DI，Init前就幫你把http new好供使用

  // <any[]>是傳回的型別
  // 訂閱回傳的結果 => 固定用法
  ngOnInit(): void {
    this.http.get<any[]>('/api/articles.json').subscribe(result => {
      this.data = result;
    });

  }

  doSearch(str: string): void {
    this.keyword = str;
  }

  deletePost(id: number): void {
    this.data = this.data.filter(value => value.id != id);
  }

}
