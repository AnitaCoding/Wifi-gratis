import { Injectable } from '@angular/core';
//import { HTTP, HTTPResponse} from '@awesome-cordova-plugins/http/ngx';
//import { Http2ServerResponse } from 'http2';


@Injectable({
  providedIn: 'root'
})
export class GetItemsService {

  ruta_servidor:string = 'https://datos.madrid.es/egob/catalogo/216619-0-wifi-municipal.json';

  constructor(/*private http:HTTP*/) { }

  getAllPuntosWifi():Promise<Response>{
    return fetch(this.ruta_servidor)
  }
/*
  getAllPuntosWifiConHttp():Promise<HTTPResponse>{
   return this.http.get(this.ruta_servidor, {}, {});
 
  }*/
}
