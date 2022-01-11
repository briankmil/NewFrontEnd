import { Component } from '@angular/core';
import { Router } from '@angular/router';
import notify from 'devextreme/ui/notify';
import { Factura } from 'src/app/shared/models/factura';
import { FacturaDetalle } from 'src/app/shared/models/facturaDetalle';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { FacturaService } from 'src/app/shared/services/factura.service';


@Component({
  templateUrl: 'crear-factura.component.html',
  styleUrls: ['./crear-factura.component.scss']
})

export class CrearFacturaComponent {

  idCliente: number = 0;
  dataSourceClientes: any;

  listFacDetalle: FacturaDetalle[] = [];
  constructor(private facturaService: FacturaService, private router: Router, private clienteService: ClienteService) {
  }

  ngOnInit(): void {
    this.clienteService.getListClientes().subscribe(data => {
      this.dataSourceClientes = data
    }, error => {
      console.log("Ocurrio un error consultando clientes", "Error")
    })
  }

  guardarDetalleFactura(detalleFactura: FacturaDetalle): void {
    console.log( this.listFacDetalle)
    this.listFacDetalle.push(detalleFactura);
  }

  onFormSubmit(e: any) {
    let fechaAct: Date = new Date();
    const factura: Factura = {
      facId: 0,
      facIdCliente: this.idCliente,
      facFecha: fechaAct,
      facTotal:  this.listFacDetalle.map(item => item.DetfacValorTotalFacturado).reduce((prev, curr) => prev + curr, 0)
    };
    this.facturaService.guardarFactura(factura).subscribe(data => {
      console.log(data.idFactura)
      this.listFacDetalle.map(detalle =>
        detalle.DetfacIdFactura = data.idFactura
      );
      this.facturaService.guardarDetalleFactura(this.listFacDetalle).subscribe(dataDetalle => {
        notify({
          message: 'Factura creada correctamente',
          position: {
            my: 'center top',
            at: 'center top',
          },
        }, 'success', 3000);
        this.router.navigate(['/home'])
      });


    }, error => {
      notify({
        message: 'Error Creando Producto',
        position: {
          my: 'center top',
          at: 'center top',
        },
      }, 'success', 3000);
      this.router.navigate(['/home'])
    })



  };
}