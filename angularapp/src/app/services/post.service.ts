import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http' //使用Http Module，另也要在app.module註冊
import { Observable } from 'rxjs'; //htpp會使用到Observable這個class
import { Post } from '../models/Post'; //會使用到Post這個Interface

//宣告http物件讓函數使用
//用var是指純變數(無論型別)，用const是指常數(無論型別)且為程式中不希望改變的值
const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'}) //Content-Type有多種，這裡選用Json
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';


  constructor(private http: HttpClient) { }

  getPosts() : Observable<Post[]> { //取得指定Url的資料
    return this.http.get<Post[]>(this.postsUrl); //.get是原生函數，用法固定
  }

  savePost(post: Post): Observable<Post> {
    //傳入Post型別的資料並使用原生http.post的函數，後面帶入固定用法所需的參數
    return this.http.post<Post>(this.postsUrl, post, httpOptions)
  }

}
