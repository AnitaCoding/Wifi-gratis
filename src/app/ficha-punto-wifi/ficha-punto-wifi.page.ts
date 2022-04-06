import { Component, OnInit } from '@angular/core';
import { PuntoWifi } from '../models/punto-wifi';
import { ComunicarDatosService } from '../services/comunicar-datos.service';


@Component({
  selector: 'app-ficha-punto-wifi',
  templateUrl: './ficha-punto-wifi.page.html',
  styleUrls: ['./ficha-punto-wifi.page.scss'],
})
export class FichaPuntoWifiPage implements OnInit {

  backIcon = 'chevron-back-outline';

  puntoWifiSeleccionado:PuntoWifi;

   constructor(public servicio_comunicar_datos:ComunicarDatosService) { 
     this.puntoWifiSeleccionado = this.servicio_comunicar_datos.sitioSeleccionado;
    
  }

  ngOnInit() {
  }



}
