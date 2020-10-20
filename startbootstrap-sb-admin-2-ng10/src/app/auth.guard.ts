import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { } // 使用Router服務元件要先DI(注入)

  canActivate(
    next: ActivatedRouteSnapshot,
    // state支援4種型別的回傳
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      // return this.router.parseUrl('/login'); // 直接return false也可以，只是會像壞掉因為點擊沒反應，所以改為轉導login頁
        return this.router.parseUrl('/login?returnurl=' + state.url); // 帶上點擊頁面的URL
    }
  }
}
