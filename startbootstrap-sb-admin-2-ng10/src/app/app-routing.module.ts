import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true // 瀏覽器就不會視為整個換頁
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
