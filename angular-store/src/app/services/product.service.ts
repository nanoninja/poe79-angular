import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { ProductModel } from './../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    urlApi: string = environment.apiUrl;

    constructor(private http: HttpClient) { }

    create(product: ProductModel): Observable<ProductModel> {
        return this.http.post<ProductModel>(this.getUrl('/products'), product);
    }

    getAll(): Observable<ProductModel[]> {
        return this.http.get<ProductModel[]>(this.getUrl('/products'));
    }

    findOne(id: string): Observable<ProductModel> {
        return this.http.get<ProductModel>(this.getUrl('/products', id));
    }

    deleteOne(id: string): Observable<void> {
        return this.http.delete<void>(this.getUrl('/products', id));
    }

    protected getUrl(path: string, ...param: string[]): string {
        let params: string = '';
        if (param.length) {
            params += '/' + param.join('/');
        }
        return `${this.urlApi}${path}${params}`;
    }
}
