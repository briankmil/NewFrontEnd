
export class FacturaDetalle {
    DetfacId: number;
    DetfacIdFactura : number;
    DetfacIdProducto : number;
    DetfacValorFacturado : number;
    DetfacCantidad : number;
    DetfacValorTotalFacturado: number;

    /**
     *
     */
    constructor(facId:number, DetfacIdFactura:number,DetfacIdProducto:number, DetfacValorFacturado:number, DetfacCantidad:number, DetfacValorTotalFacturado:number) {
        this.DetfacIdFactura = DetfacIdFactura;
        this.DetfacId = facId;
        this.DetfacIdProducto = DetfacIdProducto;        
        this.DetfacValorFacturado = DetfacValorFacturado;        
        this.DetfacCantidad = DetfacCantidad;        
        this.DetfacValorTotalFacturado = DetfacValorTotalFacturado;        
    }
    
    
}