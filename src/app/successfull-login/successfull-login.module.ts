import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccessfullLoginPageRoutingModule } from './successfull-login-routing.module';

import { SuccessfullLoginPage } from './successfull-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccessfullLoginPageRoutingModule
  ],
  declarations: [SuccessfullLoginPage]
})
export class SuccessfullLoginPageModule {}
