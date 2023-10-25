import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage2Page } from './login-page2.page';
import { LoginSuccessComponent } from './login-success/login-success.component'
import { LoginFailureComponent } from './login-failure/login-failure.component'

const routes: Routes = [
  {
    path: '',
    component: LoginPage2Page
  },
  {
    path: 'login-success',
    component: LoginSuccessComponent
  },
  {
    path: 'login-failure',
    component: LoginFailureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPage2PageRoutingModule {}
