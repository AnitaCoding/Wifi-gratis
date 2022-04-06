import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NombreDistritoService {

    nombre_distrito:string = '';
    //private canal_distrito = new Subject<string>();
    //escucha_cambio_distrito = this.canal_distrito.asObservable();

  constructor() { }

  /*comunicarDistrito(distrito:string){
    this.canal_distrito.next(distrito);

  }*/
}
