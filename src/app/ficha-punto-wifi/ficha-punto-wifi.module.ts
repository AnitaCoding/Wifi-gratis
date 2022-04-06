import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FichaPuntoWifiPageRoutingModule } from './ficha-punto-wifi-routing.module';

import { FichaPuntoWifiPage } from './ficha-punto-wifi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FichaPuntoWifiPageRoutingModule
  ],
  declarations: [FichaPuntoWifiPage]
})
export class FichaPuntoWifiPageModule {}
