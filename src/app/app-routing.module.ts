import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'zug-uebersicht',
    loadChildren: () => import('./zug-uebersicht/zug-uebersicht.module').then( m => m.ZugUebersichtPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login-page2',
    loadChildren: () => import('./login-page2/login-page2.module').then( m => m.LoginPage2PageModule)
  },
  {
    path: 'successfull-login',
    loadChildren: () => import('./successfull-login/successfull-login.module').then( m => m.SuccessfullLoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
