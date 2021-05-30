import { CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CallbackComponent } from './components/callback/callback.component';
import { HomeComponent } from './components/home/home.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '', //Default Page
    component: HomeComponent
  },
  {
    //if put after 'admin' setting will redirect to 'admin'???
    path: 'admin/view/:id', //id is a parameter
    component: ViewRegistrationComponent,
    canActivate: [AuthGuard] //if want to anthenticate
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard] //if want to anthenticate
  },
  {
    path: 'callback', //handle callback which is gotten from Auth0
    component: CallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
