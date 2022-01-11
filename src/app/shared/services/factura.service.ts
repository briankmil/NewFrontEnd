import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Factura } from '../models/factura';
import { FacturaDetalle } from '../models/facturaDetalle';

@Injectable({
    providedIn: 'root'
})
export class FacturaService {
    myAppUrl: string;
    myApiUrl: string;

    constructor(private http: HttpClient) {
        this.myAppUrl = environment.endpoint;
        this.myApiUrl = '/api/Factura/'
    }

    guardarFactura(factura: Factura): Observable<any> {
        return this.http.post(this.myAppUrl + this.myApiUrl, factura);
    }

    guardarDetalleFactura(facturasDetalle: FacturaDetalle[]): Observable<any> {
        return this.http.post(this.myAppUrl + this.myApiUrl +"PostDetalleFactura", facturasDetalle);
    }

    getListFacturas(): Observable<any> {
        return this.http.get(this.myAppUrl + this.myApiUrl);
    }

}
