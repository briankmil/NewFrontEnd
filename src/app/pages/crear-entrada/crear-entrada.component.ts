import { Component } from '@angular/core';
import { Router } from '@angular/router';
import notify from 'devextreme/ui/notify';
import { Entrada } from 'src/app/shared/models/entrada';
import { Producto } from 'src/app/shared/models/producto';
import { ProductoService } from 'src/app/shared/services/producto.service';


@Component({
  templateUrl: 'crear-entrada.component.html',
  styleUrls: ['./crear-entrada.component.scss']
})

export class CrearEntradaComponent {

  cantidad: number = 0;
  idProducto: number = 0;
  dataSourceProductos: Producto[] = [];
  constructor(private productoService: ProductoService, private router: Router) {
  }

  ngOnInit(): void {
    this.productoService.getListProductos().subscribe(data => {
      this.dataSourceProductos = data
    }, error => {
      console.log("Ocurrio un error consultando productos", "Error")
    })
  }


  onFormSubmit(e: any) {
    let fechaAct: Date = new Date();
    const entrada: Entrada = {
      EntId: 0,
      EntIdProducto: this.idProducto,
      EntFecha: fechaAct,
      EntCantidad: this.cantidad
    };
    this.productoService.guardarEntrada(entrada).subscribe(data => {
      notify({
        message: 'Entrada creada correctamente',
        position: {
          my: 'center top',
          at: 'center top',
        },
      }, 'success', 3000);

      this.router.navigate(['/home'])
    }, error => {
      notify({
        message: 'Error Creando Entrada',
        position: {
          my: 'center top',
          at: 'center top',
        },
      }, 'success', 3000);
      this.router.navigate(['/home'])
    })



  };
}