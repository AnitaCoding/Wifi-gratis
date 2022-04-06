import { Component } from '@angular/core';
import { NombreDistritoService } from '../services/nombre-distrito.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //distrito: string = '';

  constructor(public servicio_distrito:NombreDistritoService) {}

  actualizaDistrito(d:string){
    this.servicio_distrito.nombre_distrito = d;
    //this.servicio_distrito.comunicarDistrito(d);
    console.log(this.servicio_distrito.nombre_distrito +'servicio')
  }

}
