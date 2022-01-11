import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import { ProductoService } from 'src/app/shared/services/producto.service';

@Component({
  templateUrl: 'listado-productos.component.html'
})

export class ListadoProductosComponent {
  dataSource: any;
  constructor(private productoService: ProductoService) {

  }
  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(): void {
    this.productoService.getListProductos().subscribe(data => {
      this.dataSource = data
    }, error => {
      console.log("Ocurrio un error consultando productos", "Error")
    })
  }


}

