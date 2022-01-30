import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { UserModel } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlApi: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAll(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.urlApi}/users`);
  }
}
