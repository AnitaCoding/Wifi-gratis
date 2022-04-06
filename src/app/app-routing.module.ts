import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'lista-sitios',
    loadChildren: () => import('./lista-sitios/lista-sitios.module').then( m => m.ListaSitiosPageModule)
  },
  {
    path: 'lista-sitios',
    loadChildren: () => import('./lista-sitios/lista-sitios.module').then( m => m.ListaSitiosPageModule)
  },
  {
    path: 'ficha-punto-wifi',
    loadChildren: () => import('./ficha-punto-wifi/ficha-punto-wifi.module').then( m => m.FichaPuntoWifiPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
