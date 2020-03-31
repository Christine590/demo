import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service' //欲使用post.service中的類型或函數時要引入

import { Post } from '../../models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[]; //type為Post的陣列，proprty(屬性名)為posts；要新建Post類別可到models裡面新增ts file並import引用

  constructor(private postService: PostService) { } //DI???

  ngOnInit() { //component初始化就執行(剛載入就執行)
    this.postService.getPosts().subscribe(posts => { //posts為自訂的宣告新參數?
      //console.log(posts); //將結果物件posts委派為進行console動作後的結果?
      this.posts = posts; //不懂??? => 到post.component.html寫入資料直接顯示於頁面
    });
  }

}
