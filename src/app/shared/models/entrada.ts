
export class Entrada {
    EntId: number;
    EntIdProducto: number;
    EntFecha: Date;
    EntCantidad: number;

    /**
     *
     */
    constructor(EntId:number, EntIdProducto:number, EntFecha:Date, EntCantidad:number) {
        this.EntId = EntId;
        this.EntIdProducto = EntIdProducto;
        this.EntFecha = EntFecha;        
        this.EntCantidad = EntCantidad;        
    }
}