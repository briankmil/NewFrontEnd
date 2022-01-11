
export class Producto {
    proId: number;
    proNombre: string;
    proValorVentaPublico: number;
    proInventario: number;

    /**
     *
     */
    constructor(proId:number, proNombre:string, proValorVentaPublico:number, proInventario:number) {
        this.proId = proId;
        this.proNombre = proNombre;
        this.proValorVentaPublico = proValorVentaPublico;        
        this.proInventario = proInventario;        
    }
}