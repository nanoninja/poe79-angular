import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from './../models/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    urlApi: string = environment.apiUrl;

    constructor(private http: HttpClient) { }

    create(product: ProductModel): Observable<ProductModel> {
        console.log(product);
        
        return this.http.post<ProductModel>(this.getUrl('/products'), product);
    }

    getAll(): Observable<ProductModel[]> {
        return this.http.get<ProductModel[]>(this.getUrl('/products'));
    }

    protected getUrl(path: string): string {
        return `${this.urlApi}${path}`;
    }
}
