import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtilititesComponent } from './utilitites.component';

const routes: Routes = [{ path: '', component: UtilititesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilititesRoutingModule { }
