import { Injectable } from '@angular/core';
import { Cliente } from './models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  //objetivo todos los datos de los clientes se centralicen en la memoria de la aplicacion a traves del codigo que definimos aqui.
  // Los servicios tambien se utilizan para conectarnos al exterior de la aplicacion como recibir daytos de una api, como no tenemos api,
  // lo ponemos aqui a mano:

  private clientes: Array<Cliente> = [
    {nombre: 'Maria', cif: 'A1234560', ciudad: 'Bogota'},
    {nombre: 'Juan', cif: 'B1234560', ciudad: 'Cali'},
    {nombre: 'Camila', cif: 'C1234560', ciudad: 'Medellin'}
  ]

  //Una de las ventajas con servicios es si los valores de servicios se actualizan los valores se van a los componentes que lo estan utilizando
  //Vamos a crear un formulario para desde un componente enviar valores al servicio
  constructor() { }

      // como se utilizan por parte de los componentes estos datos? a traves de metodos:
      // los componentes que utilicen este servicio se invocan en este metodo getClientes recibiran esos valores.
      getClientes(): Array<Cliente> {
        return this.clientes;
      }

      //metodo recibir un cliente y añadirlo al array de cliente que ya tenemos para recibir datos desde un componente

      setCliente(cliente: Cliente) {
        this.clientes.push(cliente)
      }
}
