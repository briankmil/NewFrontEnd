import { FacturaDetalle } from "./facturaDetalle";

export class Factura {
    facId: number;
    facIdCliente : number;
    facFecha: Date;
    facTotal: number;

    /**
     *
     */
    constructor(facId:number, facIdCliente:number, facFecha:Date, facTotal:number,listFacDetalle : FacturaDetalle[]) {
        this.facId = facId;
        this.facIdCliente = facIdCliente;
        this.facFecha = facFecha;        
        this.facTotal = facTotal;        
    }

}