import { Component, ElementRef, ViewChild } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-usuario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './editar-usuario.component.html',
  styleUrl: './editar-usuario.component.css'
})
export class EditarUsuarioComponent {
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

  private params:any;
  private id:number =0;

  constructor(private ruta: ActivatedRoute, private servicio: UsuarioService, private router:Router){
    this.params = this.ruta.params.subscribe(parametros =>{
      this.id = parametros["id"];
      console.log(this.id);
      this.servicio.obtenerUsuario(this.id);
    })
  }
  
    get usuario(){
      return this.servicio.usuario;
    }

  
  actualizarUsuario(){
    
    //recuperar los valores que vienen en las cjas
    const nombre = this.referenciaNombre.nativeElement.value;
    const apPaterno = this.referenciaApPaterno.nativeElement.value;
    const apMaterno = this.referenciaApMaterno.nativeElement.value;
    const fechaNacimiento = this.referenciaFechaNacimiento.nativeElement.value;
    const telefono = this.referenciaTelefono.nativeElement.value;
    
    this.servicio.actualizarUsuario(this.id,nombre, apPaterno, apMaterno, fechaNacimiento, telefono);
    this.router.navigate(['usuario'])

  }

}
