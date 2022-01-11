import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import { ClienteService } from 'src/app/shared/services/cliente.service';

@Component({
  templateUrl: 'listado-clientes.component.html'
})

export class ListadoClientesComponent {
  dataSource: any;

  constructor(private clienteService : ClienteService) {
   
  }
  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(): void {
    this.clienteService.getListClientes().subscribe(data=> {
      this.dataSource = data
    }, error => {
      console.log("Ocurrio un error consultando clientes", "Error")
    })
  }


}
