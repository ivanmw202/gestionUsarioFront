import { Component, ElementRef, ViewChild } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-usuario',
  standalone: true,
  imports: [],
  templateUrl: './alta-usuario.component.html',
  styleUrl: './alta-usuario.component.css'
})
export class AltaUsuarioComponent {
  //atributos
  @ViewChild("nombre")
  referenciaNombre!: ElementRef;

  @ViewChild("apPaterno")
  referenciaApPaterno!:ElementRef;

  @ViewChild("apMaterno")
  referenciaApMaterno!:ElementRef;

  @ViewChild("fechaNacimiento")
  referenciaFechaNacimiento!:ElementRef;

  @ViewChild("telefono")
  referenciaTelefono!:ElementRef;

  constructor(private servicio: UsuarioService, private router:Router){
  }

  guardarUsuario(){
    //proponer la solucionnen sucio
    //recuperar los valores que vienen en las cjas
    const nombre = this.referenciaNombre.nativeElement.value;
    const apPaterno = this.referenciaApPaterno.nativeElement.value;
    const apMaterno = this.referenciaApMaterno.nativeElement.value;
    const fechaNacimiento = this.referenciaFechaNacimiento.nativeElement.value;
    const telefono = this.referenciaTelefono.nativeElement.value;
    
    this.servicio.guardarUsuario(nombre, apPaterno, apMaterno, fechaNacimiento, telefono);
    this.router.navigate(['usuario'])

  }

}
