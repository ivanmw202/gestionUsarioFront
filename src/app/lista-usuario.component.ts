import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsuarioService } from '../usuario.service';


//importaciones de NgModule

import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FilterPipe } from '../../pipes/filter.pipe';
import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-lista-usuario',
  standalone: true,
  imports: [CommonModule,RouterModule,FilterPipe,FormsModule],
  templateUrl: './lista-usuario.component.html',
  styleUrl: './lista-usuario.component.css'
})
export class ListaUsuarioComponent {
  constructor(public servicio: UsuarioService){
    this.servicio.obtenerListaUsario();
   
  }

  //get
  get listaUsuario(){
    return this.servicio.listaUsuario;
  }

  filterUsuario = this.listaUsuario;

  eliminar (id: number){
    this.servicio.eliminarUsuario(id);
  }


}

@NgModule({
  imports: [BrowserModule,FormsModule],
  providers: [],
  
})
export class AppModule {}