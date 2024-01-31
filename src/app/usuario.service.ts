import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  //atributos
  public listaUsuario: any[];
    public urlServidor: string = "http://localhost:8085/"
    public usuario: any;
  constructor(private conxionClient: HttpClient){
    this.listaUsuario = [];
    this.usuario={};
  }
    //metodos
   //metodo para realizar una peticion get a ala api// sonsume a tu api
   //para obtener la lista de pacientes
   obtenerListaUsario(): void{
    this.conxionClient.get(this.urlServidor + "api/usuarios").subscribe( (respuesta: any)=>{
      console.log(respuesta);
      this.listaUsuario=respuesta;
    });
   }

   //funcion para realizar una peticion post a la api
   //para insertar un nuevo cliente
   guardarUsuario(nombre: string, apPaterno:string, apMaterno: string, fechaNacimiento: Date, telefono: number)
    {
      this.conxionClient.post(this.urlServidor + "api/usuarios",{
        "nombre": nombre,
        "apPaterno":apPaterno,
        "apMaterno":apMaterno,
        "fechaNacimiento": fechaNacimiento,
        "telefono": telefono,
      },).subscribe( (respuesta: any)=>{
        console.log(respuesta.msg);
      });
    }

    //funcion que realiza un peticion delete a al api
    //para eliminar un paciente
    eliminarUsuario(id: number):void{
      const parametrosPeticion = new HttpParams()
        .set("id", id)
      this.conxionClient.delete(this.urlServidor + "api/usuarios/eliminar", {params: parametrosPeticion}).subscribe(
        (respuesta: any)=>{
          console.log(respuesta);
          this.obtenerListaUsario();
        });
    }

    //funcion que realiza una peticion get a la api para recuperar un cliente por id
    obtenerUsuario(id: any): void{

if(id){
  this.conxionClient.get(this.urlServidor + "api/usuarios/obtener?id=" + id).subscribe( (respuesta: any) =>{
    console.log(respuesta);
    this.usuario = respuesta;
  });

}else{
  this.conxionClient.get(this.urlServidor + "api/usuarios/obtener?nombre=" + id).subscribe( (respuesta: any) =>{
    console.log(respuesta);
    this.usuario = respuesta;
  });

}

      
    }


  actualizarUsuario(id: number, nombre: string, apPaterno: string, apMaterno:string, fechaNacimiento: Date,telefono: number)
    {
      this.conxionClient.put(this.urlServidor + "api/usuarios/actualizar/" + id, {
        "id":id,
        "nombre": nombre,
        "apPaterno": apPaterno,
        "apMaterno": apMaterno,
        "fechaNacimiento":fechaNacimiento,
        "telefono":telefono,
      },).subscribe( (respuesta:any)=> {
        console.log(respuesta.msg);
      });
    }
  

}
