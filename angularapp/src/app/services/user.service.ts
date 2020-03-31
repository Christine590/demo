import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; //非Angular原生，來自React
import { of } from 'rxjs';

import { User } from '../models/User'; //引入後才能使用model內資料的Type

@Injectable({
  providedIn: 'root'
})
export class userService {
  users: User[];
  data: Observable<any>; //任意型別，是Obserable Property?

  constructor() {
    this.users = [
      {
        firstName: 'Christine',
        lastName: 'Wu',
        email: 'Christine@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'BoBo',
        lastName: 'Rong',
        email: 'BoBo@gmail.com',
        isActive: false,
        registered: new Date('03/07/2018 05:10:00'),
        hide: true
      },
      {
        firstName: 'Fish',
        lastName: 'Young',
        email: 'Fish@gmail.com',
        isActive: true,
        registered: new Date('01/04/2018 08:01:09'),
        hide: true
      }
    ]
   }

   getData() {
     this.data = new Observable(observer => {
       setTimeout(() => {
         observer.next(1);
       }, 1000); //1000毫秒=1秒

       setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next({name: 'Lily'}); //一個object，屬性名為name，屬性值為字串Lily
      }, 4000);
     })

     return this.data;
   }
   
   getUsers(): Observable<User[]> { //使用Observable，是User Type的陣列
    return of (this.users); //of允許return一個observable的陣列
   }

  //  getUsers(): User[] {
  //   console.log('Fetching users from service...');
  //   return this.users;
  //  }

   addUser(user:User){ //user是參數名；User是參數的類型
    this.users.unshift(user); //在陣列的開頭加入新元素
   }

}
