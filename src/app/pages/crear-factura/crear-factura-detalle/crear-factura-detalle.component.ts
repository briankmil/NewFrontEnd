import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import notify from 'devextreme/ui/notify';
import { Factura } from 'src/app/shared/models/factura';
import { FacturaDetalle } from 'src/app/shared/models/facturaDetalle';
import { Producto } from 'src/app/shared/models/producto';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { FacturaService } from 'src/app/shared/services/factura.service';
import { ProductoService } from 'src/app/shared/services/producto.service';


@Component({
  selector: 'app-nueva-factura-detalle',
  templateUrl: 'crear-factura-detalle.component.html',
  styleUrls: ['./crear-factura-detalle.component.scss']
})

export class CrearFacturaDetalleComponent {

  dataSourceProductos: Producto[] = [];
  idProducto: number = 0;
  cantidad:number = 0;
  valor: number = 0;
  valorTotal: number = 0;
  @Output() enviarFacturaDetalle = new EventEmitter<FacturaDetalle>();

  constructor(private facturaService: FacturaService, private router: Router, private productoService: ProductoService) {
  }

  ngOnInit(): void {
    this.productoService.getListProductos().subscribe(data => {
      this.dataSourceProductos = data
    }, error => {
      console.log("Ocurrio un error consultando productos", "Error")
    })
  }

  agregarFacturaDetalle(): void {
    //obtener datos
    const facturaDetalle: FacturaDetalle = new FacturaDetalle(0, 0, this.idProducto, this.valor, this.cantidad, this.valorTotal);
    this.enviarFacturaDetalle.emit(facturaDetalle);
    this.valor = 0;
    this.cantidad = 0;
    this.valorTotal = 0;
    this.idProducto = 0;

  }

  onValueChangeProducto(){
    console.log(this.idProducto)
    this.valor =0;
    this.productoService.getListProductos().subscribe(data => {
      const dataSourceProductos: Producto[] = data;
      this.valor =  dataSourceProductos.find(f=> f.proId == this.idProducto)?.proValorVentaPublico?? 0;
    })

    
  }

  onValueChangeCantidad(){
    this.valorTotal = 0 ;
    this.valorTotal = this.cantidad * this.valor;
  }


}