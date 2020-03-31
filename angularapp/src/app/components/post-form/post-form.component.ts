import { Component, OnInit } from '@angular/core';

//欲使用 post.service中的函數 & Post的Model 所以引入
import { PostService } from '../../services/post.service' 
import { Post } from '../../models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  //自訂的取值用函數
  //可以吃到前端帶入的參數，不需要在這裡重新宣告變數
  addPost(title, body) {
    //console.log(title, body); //取到前端參數但Add未存於資料庫的話，將視窗關掉就會消失
    if(!title || !body) { //若未取得其中一個值 => 空白未輸入
      alert('Please add post');
    } else {
      //因為有引入postService所以可以叫用
      //Post Model有id, title, body，as是如何轉換???
      this.postService.savePost({title, body} as Post).subscribe
      (post => {
        console.log(post); //會把執行Post後的結果回傳然後顯示在console?顯示post成功後自動編列的id及剛剛於畫面key in的title跟body(以一個json中object的形式{name: value, name: value...})
      })
    }
  }
}
