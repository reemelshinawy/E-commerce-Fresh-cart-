import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private _baseUrl: string = `${environment.baseApiUrl}/api/v1/products`;
    constructor(private _client: HttpClient) {}

    getAllProducts(pageNumber: number = 1, limit: number = 40): Observable<any> {
        return this._client.get<any>(`${this._baseUrl}?page=${pageNumber}&limit=${limit}`);
    }

    getSpecificProduct(id: string): Observable<any> {
        return this._client.get<any>(`${this._baseUrl}/${id}`);
    }

}
