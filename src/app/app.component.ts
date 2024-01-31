import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListaUsuarioComponent } from './Usuario/lista-usuario/lista-usuario.component';
import { ListaDomicilioComponent } from './Domicilio/lista-domicilio/lista-domicilio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FooterComponent,NavBarComponent,ListaUsuarioComponent,ListaDomicilioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GestionUsuarios';
}
