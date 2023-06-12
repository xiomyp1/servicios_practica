import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  cliente: Cliente = {
    nombre: '',
    cif: '',
    ciudad: ''
  }

  constructor( private clientesService: ClientesService) {}

  ngOnInit(){}

  //Cuando se dispare ese addCliente utilizamos this.clientesService y el metodo espera que le mandemos un cliente y decimos this.cliente cuando llegue se añadira
  // al array de clientes y el otro componente se actualizara
  addCliente(){
    this.clientesService.setCliente(this.cliente)
  }
}
