import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(private router: Router){}

  goListarUsuario(){
    this.router.navigate(['/', 'usuario']);
  }

  goAltaUsuario(){
    this.router.navigateByUrl('/usuario/alta')
  }

  goListarDomicilio(){
    this.router.navigate(['/', 'domicilio']);
  }

  goAltaDomicilio(){
    this.router.navigateByUrl('/domicilio/alta')
  }


}
