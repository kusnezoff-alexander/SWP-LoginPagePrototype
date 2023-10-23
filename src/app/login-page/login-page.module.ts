import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { LoginLogoComponent } from './login-logo/login-logo.component'
import { LoginFormComponent } from './login-form/login-form.component'

@NgModule({
  declarations: [LoginLogoComponent, LoginFormComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LoginLogoComponent,
    LoginFormComponent
  ]
})
export class LoginPageModule { }
