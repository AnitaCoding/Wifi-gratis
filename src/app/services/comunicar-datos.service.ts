import { Injectable } from '@angular/core';
import { PuntoWifi } from '../models/punto-wifi';

@Injectable({
  providedIn: 'root'
})
export class ComunicarDatosService {

  sitioSeleccionado:PuntoWifi = new PuntoWifi();

  constructor() {
   }
}
