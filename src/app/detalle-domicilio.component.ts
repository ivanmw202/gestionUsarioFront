import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomicilioService } from '../domicilio.service';

@Component({
  selector: 'app-detalle-domicilio',
  standalone: true,
  imports: [],
  templateUrl: './detalle-domicilio.component.html',
  styleUrl: './detalle-domicilio.component.css'
})
export class DetalleDomicilioComponent {
  //atributos
  private params:any;
  private id:number = 0;

  constructor(private ruta: ActivatedRoute, private servicio: DomicilioService){
    this.params = this.ruta.params.subscribe(parametros =>{
      this.id = parametros["id"];
      console.log(this.id);
      this.servicio.obtenerDomicilio(this.id);
    })
  }

    get domicilio(){
      return this.servicio.domicilio;
    }

}
