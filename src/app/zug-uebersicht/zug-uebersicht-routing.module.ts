import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZugUebersichtPage } from './zug-uebersicht.page';

const routes: Routes = [
  {
    path: '',
    component: ZugUebersichtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZugUebersichtPageRoutingModule {}
