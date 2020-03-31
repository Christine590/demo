import { Component, OnInit } from '@angular/core';
import { CodeNode } from 'source-list-map';

//從哪支檔案引入User這個interface
import {User} from '../../models/User';

@Component ({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  //template: '<h2>Christine Wu</h2>'
  //styles:[`
  //  h2 {
  //    color: blue
  //  }
  //`]
})

export class UserComponent implements OnInit {
  // Properties
  user: User;

  //firstName = 'Fish';
  //lastName = 'Wu';

  // firstName: string;
  // lastName: string;

  //number -> string on Page
  //age: number = 26;

  //any即不限制型別，可為任意型別
  // foo: any;
  // haskids: boolean;
  // numberArray: number[];
  // stringArray: string[];
  // mixedArray: any[];
  // myTuple: [string, number, boolean];

  // unusable: void;
  // u: undefined;
  // n: null;

  // address = {
  //   street: '5 st',
  //   city: 'Taipei',
  //   country: 'Taiwan',
  //};

  // Methods
  // constructorg是元件載入時預設執行
  constructor() {
    
    }

  ngOnInit() {
    // this.user = {
    //   firstName: 'Christine',
    //   lastName: 'Wu',
    //   age: 26,
    //   address: {
    //    street: 'main str',
    //      city: 'Taipei',
    //     state: 'Taiwan'
    //   }
  // }

    //this.sayHello();
    //console.log(this.age);
    //this.hasBirthday();
    //console.log(this.age);

    // this.firstName = 'Christine';
    // this.lastName ='Wu';

    // this.foo = true;
    // this.haskids = false;
    // this.numberArray = [1,2,3];
    // this.stringArray = ['hello', 'world'];
    // this.mixedArray = [true, undefined, 23];
    // this.myTuple = ['hi', 1, true];

    //void只能是undefined，其他會Exception
    // this.unusable = undefined;
    // this.u = undefined;
    // this.n = null;

    // console.log(this.addNumbers(2,3));

  }

  // sayHello() {
  //   console.log(`Hello ${this.firstName}`);
  //   //console.log('Hello'+' '+this.firstName);
  // }

  // hasBirthday() {
  //   this.age += 1;
  // }

  // showAge() {
  //   return this.age - 3;
  // }

  // addNumbers(num1:number , num2:number): number{
  //   return num1 + num2;
  // }

}