import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomicilioService } from '../domicilio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-domicilio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './editar-domicilio.component.html',
  styleUrl: './editar-domicilio.component.css'
})
export class EditarDomicilioComponent {
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

  //atributos
private params:any;
private id:number = 0;

constructor(private ruta: ActivatedRoute, private servicio: DomicilioService, private router:Router){
  this.params = this.ruta.params.subscribe(parametros =>{
    this.id = parametros["id"];
    console.log(this.id);
    this.servicio.obtenerDomicilio(this.id);
  })
}

  
  get domicilio(){
    return this.servicio.domicilio;
  }
actualizarDomicilio(){
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

 
  
  this.servicio.actualizarDomicilio(this.id,calle, numeroInterior, numeroxteriro, colonia,cp,municipio,estado,usuarioId);
  this.router.navigate(['domicilio'])

}

  

}
