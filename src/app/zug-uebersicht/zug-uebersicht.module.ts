import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZugUebersichtPageRoutingModule } from './zug-uebersicht-routing.module';

import { ZugUebersichtPage } from './zug-uebersicht.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZugUebersichtPageRoutingModule
  ],
  declarations: [ZugUebersichtPage]
})
export class ZugUebersichtPageModule {}
