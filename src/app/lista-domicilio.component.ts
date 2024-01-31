import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DomicilioService } from '../domicilio.service';

@Component({
  selector: 'app-lista-domicilio',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './lista-domicilio.component.html',
  styleUrl: './lista-domicilio.component.css'
})
export class ListaDomicilioComponent {
  
  constructor(public servicio: DomicilioService){
    this.servicio.obtenerListaDomicilio();
  }

  //get
  get listaDomicilio(){
    return this.servicio.listaDomicilio;
  }

  eliminar (id: number){
    this.servicio.eliminarDomicilio(id);
  }


}
