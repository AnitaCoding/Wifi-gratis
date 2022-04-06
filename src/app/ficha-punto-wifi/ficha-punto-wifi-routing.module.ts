import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FichaPuntoWifiPage } from './ficha-punto-wifi.page';

const routes: Routes = [
  {
    path: '',
    component: FichaPuntoWifiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FichaPuntoWifiPageRoutingModule {}
