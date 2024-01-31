import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomicilioService {
     //atributos
  public listaDomicilio: any[];
  public listaUsuario: any[];

  public urlServidor: string = "http://localhost:8085/"
  public domicilio: any;

constructor(private conxionClient: HttpClient){
  this.listaDomicilio = [];
  this.domicilio={};
  this.listaUsuario=[];
}
  //metodos
 //metodo para realizar una peticion get a ala api// sonsume a tu api
 //para obtener la lista de pacientes
 obtenerListaDomicilio(): void{
  this.conxionClient.get(this.urlServidor + "api/domicilio").subscribe( (respuesta: any)=>{
    console.log(respuesta);
    this.listaDomicilio=respuesta;
  });
 }
 ////////////////////////////////////////////////////////////////////////////////
 obtenerListaUsario(): void{
  this.conxionClient.get(this.urlServidor + "api/usuarios").subscribe( (respuesta: any)=>{
    console.log(respuesta);
    this.listaUsuario=respuesta;
  });
 }

 //funcion para realizar una peticion post a la api
 //para insertar un nuevo cliente
 guardarDomicilio(calle: string, numeroInterior:number, numeroExterior: number, colonia: string, cp: number, municipio: string, estado: string,usuarioId:number)
  {
    this.conxionClient.post(this.urlServidor + "api/domicilio",{
      "calle": calle,
      "numeroInterior":numeroInterior,
      "numeroExterior":numeroExterior,
      "colonia": colonia,
      "cp": cp,
      "municipio": municipio,
      "estado": estado,
      "usuarioId":usuarioId,
    },).subscribe( (respuesta: any)=>{
      console.log(respuesta.msg);
    });
  }

  //funcion que realiza un peticion delete a al api
  //para eliminar un paciente
  eliminarDomicilio(id: number):void{
    const parametrosPeticion = new HttpParams()
      .set("id", id)
    this.conxionClient.delete(this.urlServidor + "api/domicilio/eliminar", {params: parametrosPeticion}).subscribe(
      (respuesta: any)=>{
        console.log(respuesta);
        this.obtenerListaDomicilio();
      });
  }

  //funcion que realiza una peticion get a la api para recuperar un domicilio por id
  obtenerDomicilio(id: number): void{

  this.conxionClient.get(this.urlServidor + "api/domicilio/obtener/" + id).subscribe( (respuesta: any) =>{
  console.log(respuesta);
  this.domicilio = respuesta;
  });
 
  }


actualizarDomicilio(id: number, calle: string, numeroInterior: number, numeroExterior:number, colonia: string,cp: number,municipio:string,estado:string,usuarioId:number)
  {
    this.conxionClient.put(this.urlServidor + "api/domicilio/actualizar/" + id, {
      "calle": calle,
      "colonia": colonia,
      "cp": cp,
      "estado": estado,
      "id":id,
      "municipio": municipio,
      "numeroExterior":numeroExterior,
      "numeroInterior":numeroInterior,
      "usuarioId":usuarioId,
    },).subscribe( (respuesta:any)=> {
      console.log(respuesta.msg);
    });
  }

}
