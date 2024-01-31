import { Component, ElementRef, ViewChild } from '@angular/core';
import { DomicilioService } from '../domicilio.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alta-domicilio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alta-domicilio.component.html',
  styleUrl: './alta-domicilio.component.css'
})
export class AltaDomicilioComponent {
   //atributos
   @ViewChild("calle")
   referenciaCalle!: ElementRef;
 
   @ViewChild("numeroInterior")
   referenciaNumeroInterior!:ElementRef;

   @ViewChild("numeroxteriro")
   referenciaNumeroExterior!:ElementRef;

   @ViewChild("colonia")
   referenciaColonia!:ElementRef;

   @ViewChild("cp")
   referenciaCp!:ElementRef;

   @ViewChild("municipio")
   referenciaMunicipio!:ElementRef;
 
   @ViewChild("estado ")
   referenciaEstado!:ElementRef;
 
   @ViewChild("usuarioId")
   referenciaUsuarioId!:ElementRef;
   
 constructor(private servicio: DomicilioService, private router:Router){
   this.servicio.obtenerListaUsario();
   
 }
 guardarDomicilio(){
   //proponer la solucionnen sucio
   //recuperar los valores que vienen en las cjas
   const calle = this.referenciaCalle.nativeElement.value;
   const numeroInterior = this.referenciaNumeroInterior.nativeElement.value;
   const numeroxteriro = this.referenciaNumeroExterior.nativeElement.value;
   const colonia = this.referenciaColonia.nativeElement.value;
   const cp = this.referenciaCp.nativeElement.value;
   const municipio = this.referenciaMunicipio.nativeElement.value;
   const estado = this.referenciaEstado.nativeElement.value;
   const usuarioId = this.referenciaUsuarioId.nativeElement.value;

  
   
   this.servicio.guardarDomicilio(calle, numeroInterior, numeroxteriro, colonia,cp,municipio,estado,usuarioId);
   this.router.navigate(['domicilio'])
 
 }
 get listaUsuario(){
   return this.servicio.listaUsuario;
    }
 
 

}
