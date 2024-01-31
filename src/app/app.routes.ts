import { Routes } from '@angular/router';
import { ListaUsuarioComponent } from './Usuario/lista-usuario/lista-usuario.component';
import { Component } from '@angular/core';
import { ListaDomicilioComponent } from './Domicilio/lista-domicilio/lista-domicilio.component';
import { AltaUsuarioComponent } from './Usuario/alta-usuario/alta-usuario.component';
import { AltaDomicilioComponent } from './Domicilio/alta-domicilio/alta-domicilio.component';
import { EditarUsuarioComponent } from './Usuario/editar-usuario/editar-usuario.component';
import { DetalleUsuarioComponent } from './Usuario/detalle-usuario/detalle-usuario.component';
import { DetalleDomicilioComponent } from './Domicilio/detalle-domicilio/detalle-domicilio.component';
import { EditarDomicilioComponent } from './Domicilio/editar-domicilio/editar-domicilio.component';

export const routes: Routes = [
    {path:"usuario",component: ListaUsuarioComponent},
    {path:"usuario/alta",component:AltaUsuarioComponent},
    {path:"usuario/editar/:id",component:EditarUsuarioComponent},
    {path:"usuario/detalle/:id",component:DetalleUsuarioComponent},

    
    {path:"domicilio",component:ListaDomicilioComponent},
    {path:"domicilio/alta",component:AltaDomicilioComponent},
    {path:"domicilio/detalle/:id",component:DetalleDomicilioComponent},
    {path:"domicilio/editar/:id",component:EditarDomicilioComponent},

    { path: "", redirectTo: "/usuario", pathMatch: "full" },
];
