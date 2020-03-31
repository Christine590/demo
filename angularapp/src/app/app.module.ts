import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//錯誤訊息:compiler.js:2175 Uncaught Error: Template parse errors:
//Can't bind to 'ngModel' since it isn't a known property of 'input'.表示需要新增引用如下
import { FormsModule } from '@angular/Forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
//CLI建檔後自動加入 UserComponent
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//CLI建檔Service的指令後面要加--module=app.module才會自動寫入，沒有的話要自己補import，還要加到provider
import { userService } from './services/user.service';
import { PostService } from './services/post.service';

import { PostsComponent } from './components/posts/posts.component';
import { PostFormComponent } from './components/post-form/post-form.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    //CLI建檔後自動加入 UserComponent
    UsersComponent,
    NavbarComponent,
    PostsComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    // 新增FormsModule
    FormsModule,
    HttpClientModule
  ],
  providers: [userService,PostService], //Service
  bootstrap: [AppComponent]
})
export class AppModule { }
