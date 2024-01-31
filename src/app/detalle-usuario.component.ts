import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-detalle-usuario',
  standalone: true,
  imports: [],
  templateUrl: './detalle-usuario.component.html',
  styleUrl: './detalle-usuario.component.css'
})
export class DetalleUsuarioComponent {
  //atributos
  private params:any;
  private id:number = 0;

  constructor(private ruta: ActivatedRoute, private servicio: UsuarioService){
    this.params = this.ruta.params.subscribe(parametros =>{
      this.id = parametros["id"];
      console.log(this.id);
      this.servicio.obtenerUsuario(this.id);
    })
  }

    get usuario(){
      return this.servicio.usuario;
    }

}
