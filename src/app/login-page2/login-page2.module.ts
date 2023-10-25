import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPage2PageRoutingModule } from './login-page2-routing.module';

import { LoginPage2Page } from './login-page2.page';

import { LoginLogoComponent } from './login-logo/login-logo.component'
import { LoginFormComponent } from './login-form/login-form.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPage2PageRoutingModule
  ],
  declarations: [LoginPage2Page, LoginLogoComponent, LoginFormComponent]
})
export class LoginPage2PageModule {}
