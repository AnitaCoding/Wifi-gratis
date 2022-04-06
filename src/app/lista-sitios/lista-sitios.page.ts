import { Component, OnInit } from '@angular/core';
import { PuntoWifi } from '../models/punto-wifi';
import { ComunicarDatosService } from '../services/comunicar-datos.service';
import { GetItemsService } from '../services/get-items.service';
import { NombreDistritoService } from '../services/nombre-distrito.service';

@Component({
  selector: 'app-lista-sitios',
  templateUrl: './lista-sitios.page.html',
  styleUrls: ['./lista-sitios.page.scss'],
})
export class ListaSitiosPage implements OnInit {

  listaPuntosWifi: Array<PuntoWifi>;
  listaPuntosWifiFiltrada: Array<PuntoWifi>;
  distrito: string;

  backIcon = 'chevron-back-outline';

  puntoWifiSeleccionado: PuntoWifi;

  constructor(public servicio_puntos_wifi:GetItemsService,
    public servicio_distrito:NombreDistritoService,
    public servicio_comunicar_datos:ComunicarDatosService) { 
    this.listaPuntosWifi = Array<PuntoWifi>();
    this.listaPuntosWifiFiltrada = Array<PuntoWifi>();
    this.puntoWifiSeleccionado = new PuntoWifi();
    this.distrito = this.servicio_distrito.nombre_distrito;
    /*this.servicio_distrito.escucha_cambio_distrito.subscribe(
      distrito_nuevo => {
        this.distrito = distrito_nuevo;
        this.getPuntosWifi();
        //this.filtrarPorDistrito();
      }
    )*/
  }

  ngOnInit() {
    this.getPuntosWifi();

  }

  comunicarDatos(id:string){
    console.log(id);
    this.datosSitioSeleccionado(id);
  }

  datosSitioSeleccionado(id:string){
    this.listaPuntosWifi.forEach(w => {
      if(w.id === id){
        this.puntoWifiSeleccionado.title = w.title;
        console.log(this.puntoWifiSeleccionado.title);
        this.puntoWifiSeleccionado.address = w.address;
        this.puntoWifiSeleccionado.organization = w.organization;
        this.puntoWifiSeleccionado.organization = w.organization;
        this.servicio_comunicar_datos.sitioSeleccionado = this.puntoWifiSeleccionado;
      }
    })
  }

  getPuntosWifi(){
    this.servicio_puntos_wifi.getAllPuntosWifi()
    .then(respuesta=>respuesta.json())
    .then(data=>{
      this.mostrarItems(data);
      
    })
    .catch(error=>this.mostrarError(error))

  }
/*
  getPuntosWifi2(){
    this.servicio_puntos_wifi.getAllPuntosWifiConHttp().then(data => {

      console.log(data.status);
      console.log(data.data); // data received by server
      this.mostrarItems(JSON.parse(data.data));
      console.log(data.headers);
  
    })
    .catch(error => {
  
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
  
    });
    //.catch(error=>this.mostrarError(error))

  }*/

  mostrarItems (respuesta:any)
  {
    this.listaPuntosWifi = <Array<PuntoWifi>>respuesta['@graph'];  
        this.listaPuntosWifi.forEach(m => {
          if(m.address.hasOwnProperty('district')){
            let aux_array_district = m.address["district"]["@id"].split('/');
            m.district = aux_array_district[aux_array_district.length-1];

            //FILTRO POR DISTRITO
            if(m.district == this.distrito){
              this.listaPuntosWifiFiltrada.push(m);
            }
          }
        })
        
  }

  
  mostrarError (error:any):void
  {
    console.error('Ha ocurrido un error: (' + error.status + ') - ' + error.message);
  }

}
