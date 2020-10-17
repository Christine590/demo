import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { ColorComponent } from './utilities/color/color.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' }, // Match還有'prefix'可用，前綴詞相符
  { path: 'dashboard', component: DashboardComponent },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'utilities', loadChildren: () => import('./utilities/utilities.module').then(m => m.UtilitiesModule) },
  { path: '**', component: NotFoundComponent } // 套用於全部
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true // 瀏覽器就不會視為整個換頁
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
