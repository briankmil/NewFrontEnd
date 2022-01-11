import { Component } from '@angular/core';
import { Router } from '@angular/router';
import notify from 'devextreme/ui/notify';
import { Producto } from 'src/app/shared/models/producto';
import { ProductoService } from 'src/app/shared/services/producto.service';


@Component({
  templateUrl: 'crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss']
})

export class CrearProductoComponent {

  nombre: string = "";
  valor: number = 0;
  constructor(private productoService: ProductoService, private router: Router) {
  }




  onFormSubmit(e: any) {
    const producto: Producto = {
      proId: 0,
      proNombre: this.nombre,
      proValorVentaPublico: this.valor,
      proInventario: 0
    };
    this.productoService.guardarProducto(producto).subscribe(data => {
      notify({
        message: 'Producto creado correctamente',
        position: {
          my: 'center top',
          at: 'center top',
        },
      }, 'success', 3000);

      this.router.navigate(['/home'])
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