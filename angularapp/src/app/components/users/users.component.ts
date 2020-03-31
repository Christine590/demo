import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User'

import { userService} from '../../services/user.service';
 
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
//加上implements以實作OnInit這個function 
export class UsersComponent implements OnInit {
  //User這個interface原本是{object}，這裡用[Array]是因為型態要為object的array
  //因此若只寫: User也行，即是只有一組{object}
  //可實作Property Binding
  user: User = {
    // 預設值給空字串
    firstName: '',
          lastName: '',
          age: null, //數字型態預設值
          email: '',
          // address: {
          //  street: '',
          //    city: '',
          //   state: ''
          //},
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  // currentClasses: {}; //命為一個物件 object
  // currentStyles: {};
  showUserForm: boolean = false;
  // {static: false} 是Angular 8以後加的設定參數
  // 用法: @ViewChild('nameInput', {static: false}) component
  @ViewChild('userForm', {static: false}) form: any;
  data: any;

  //private代表只能在此class中被使用
  constructor(private userService: userService) { }

  //當component初始化時就會執行
  //要有import OnInit才可使用
  ngOnInit() {
    // setTimeout(() => {
    this.userService.getData().subscribe(data => {
      console.log(data);
    });    

    // this.users = this.dataService.getUsers();
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });

      // this.users = [
      //   {
      //     firstName: 'Christine',
      //     lastName: 'Wu',
      //     //age: 26,
      //     email: 'Christine@gmail.com',
      //     // address: {
      //     //  street: 'main str',
      //     //    city: 'Taipei',
      //     //   state: 'Taiwan'
      //     // },
      //     // lorempixel是隨機幫忙產圖的網站，600*600，可選類別
      //     // image: 'http://lorempixel.com/600/600/people/3',
      //     isActive: true,
      //     // balance: 100,
      //     registered: new Date('01/02/2018 08:30:00'),
      //     hide: true
      //   },
      //   {
      //     firstName: 'BoBo',
      //     lastName: 'Rong',
      //     //age: 25,
      //     email: 'BoBo@gmail.com',
      //     // address: {
      //     // street: 'second str',
      //     //   city: 'Taipei',
      //     //   state: 'Taiwan'
      //     //},
      //     // image: 'http://lorempixel.com/600/600/people/2',
      //     isActive: false,
      //     // balance: 200,
      //     registered: new Date('03/07/2018 05:10:00'),
      //     hide: true
      //   },
      //   {
      //     firstName: 'Fish',
      //     lastName: 'Young',
      //     //age: 23,
      //     email: 'Fish@gmail.com',
      //     // address: {
      //     //  street: 'third str',
      //     //    city: 'Taipei',
      //     //   state: 'Taiwan'
      //     // },
      //     // image: 'http://lorempixel.com/600/600/people/1',
      //     isActive: true,
      //     // balance: 300,
      //     registered: new Date('01/04/2018 08:01:09'),
      //     hide: true
      //   }
      // ]
        
      //this.loaded = true;

    // }, 2000);


    //console.log('init...');
    // this.users = [
    //   {
    //     firstName: 'Christine',
    //     lastName: 'Wu',
    //     age: 26,
    //     address: {
    //      street: 'main str',
    //        city: 'Taipei',
    //       state: 'Taiwan'
    //     }
    // },
    // {
    //   firstName: 'BoBo',
    //   lastName: 'Rong',
    //   age: 25,
    //   address: {
    //    street: 'second str',
    //      city: 'Taipei',
    //     state: 'Taiwan'
    //   }
    // },
    // {
    //     firstName: 'Fish',
    //     lastName: 'Young',
    //     age: 23,
    //     address: {
    //      street: 'third str',
    //        city: 'Taipei',
    //       state: 'Taiwan'
    //     }
    // }

    //this.showExtended = false;

    // this.addUser(
    //   {
    //     // 若少了原本Model的部分欄位值會Error，須回Model把可允許無值的欄位加上?
    //     firstName: 'Pig',
    //     lastName: 'Pi',
    //     age: 23,
    //     address: {
    //      street: 'forth str',
    //        city: 'Taipei',
    //       state: 'Taiwan'
    //     }
    //   }
    // );

      // this.setCurrentClasses();
      // this.setCurrentStyles();

  } //ngOnInit() End

  // addUser(user: User) {
  //   this.users.push(user); //Push是TypeScript的原生方法，為array加入項目
  // }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date(); //取得當前時間

  //   this.users.unshift(this.user); //直接抓取前端的user當參數帶入，push加在陣列最後；unshift加在陣列最前

  //   this.user = { //最後清空表單資料
  //     firstName: '',
  //         lastName: '',
  //         age: null,
  //         email: ''
  //         // address: {
  //         //  street: '',
  //         //    city: '',
  //         //   state: ''
  //         // },
  //   }
  // }

  // setCurrentClasses() {
  //   this.currentClasses = {
  //     'btn-success': this.enableAdd,
  //     //當右邊property為true時，左方class會被叫用，左方為字串而非元素，若為元素應該直接寫btn-success並給上型別與值
  //     'big-text' : this.showExtended 
  //   }
  // }

  // setCurrentStyles() {
  //   this.currentStyles = {
  //     'padding-top' : this.showExtended ? '0' : '40px',
  //     'font-size' : this.showExtended ? '0' : '40px'
  //   }
  // }

  //fireEvent(e) { //e是隨便命名的，意思把$Event參數帶進來
    // console.log('Button Clicked');
    //console.log(e.type);
  //}

  toggleHide(user: User) {
    user.hide = !user.hide; //轉換為與當次布林值相反的值，因此可收合
  }

  // onSubmit(e) {
  //   console.log(123);
  //   // e是觸發當下的事件 => event
  //   // preventDefault()阻止元素發生默認的行為(如:當點擊提交按鈕時阻止對表單的提交)
  //   e.preventDefault();
  // }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if(!valid) {
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      
      //unshift()可向數組的開頭添加一個或更多元素，並返回新的長度
      //arrayObject.unshift(newelement1,newelement2,....,newelementX)
      
      //this.users.unshift(value);
      this.userService.addUser(value); //value是從表單取得的值,需帶入service的function

      this.form.reset();
    }
  }

  // fireEvent(e) {
  //   // 取得type in的值
  //   console.log(e.type); //result: keydown 事件類型
  //   console.log(e.target.value); // result: 當下輸入的值(會隨著刪除/修改而顯示多筆，每次變動都是一筆)
  // }

}// OnInit() End
