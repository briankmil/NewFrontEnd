
export class Cliente {
    cliId: number;
    cliTipoIdentificacion: string;
    cliIdentificacion: string;
    cliNombres: string;
    cliApellidos: string;
    cliFechaNacimiento: Date;

    /**
     *
     */
    constructor(cliId: number, cliTipoIdentificacion: string, cliIdentificacion: string, cliNombres: string, cliApellidos: string, cliFechaNacimiento: Date) {
        this.cliId = cliId;
        this.cliTipoIdentificacion = cliTipoIdentificacion;
        this.cliIdentificacion = cliIdentificacion;
        this.cliNombres = cliNombres;
        this.cliApellidos = cliApellidos;
        this.cliFechaNacimiento = cliFechaNacimiento;
    }
}