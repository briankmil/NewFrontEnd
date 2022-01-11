import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import { FacturaService } from 'src/app/shared/services/factura.service';

@Component({
  templateUrl: 'listado-facturas.component.html'
})

export class ListadoFacturasComponent {
  dataSource: any;
  constructor(private facturaService: FacturaService) {

  }
  ngOnInit(): void {
    this.getFacturas();
  }

  getFacturas(): void {
    this.facturaService.getListFacturas().subscribe(data => {
      this.dataSource = data
    }, error => {
      console.log("Ocurrio un error consultando facturas", "Error")
    })
  }


}

