import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Entrada } from '../models/entrada';
import { Producto } from '../models/producto';

@Injectable({
    providedIn: 'root'
})
export class ProductoService {
    myAppUrl: string;
    myApiUrl: string;

    constructor(private http: HttpClient) {
        this.myAppUrl = environment.endpoint;
        this.myApiUrl = '/api/Producto/'
    }

    guardarProducto(producto: Producto): Observable<any> {
        return this.http.post(this.myAppUrl + this.myApiUrl, producto);
    }

    getListProductos(): Observable<any> {
        return this.http.get(this.myAppUrl + this.myApiUrl);

    }

    guardarEntrada(entrada: Entrada): Observable<any> {
        return this.http.post(this.myAppUrl + this.myApiUrl+ "PostEntrada", entrada);
    }

}
