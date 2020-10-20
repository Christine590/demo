import { LoginComponent } from './login/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  {
    path: '', // 無規則就都適用???
    component: LayoutComponent,
    // canActivate: [AuthGuard], 如果加在這，是layoutComponent第一次被建起來時會執行，但後來切換元件就不會再執行!或是可以改為canActivateChild?
    // canDezctivate可設定條件，點擊其他路由也不讓離開頁面
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'page1', component: Page1Component, canActivate: [AuthGuard] }, // canActivate型別是any[] 任意陣列
      { path: 'page2', component: Page2Component },
      { path: 'utilities', loadChildren: () => import('./utilities/utilities.module').then(m => m.UtilitiesModule) },
    ]
  },
  // { path: '', pathMatch: 'full', redirectTo: 'dashboard' }, // Match還有'prefix'可用，前綴詞相符
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'page1', component: Page1Component },
  // { path: 'page2', component: Page2Component },
  // // 模組延遲載入 => 到了utilities下的color頁等 才會載入utilities Module的JS，不會在首頁就一起載
  // { path: 'utilities', loadChildren: () => import('./utilities/utilities.module').then(m => m.UtilitiesModule) },
  { path: '**', component: NotFoundComponent } // 套用於全部
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true, // 瀏覽器就不會視為整個換頁
    preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
