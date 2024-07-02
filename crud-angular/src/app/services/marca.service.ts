import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Marca } from '../models/marca';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  http = inject(HttpClient);
  API_URL = "http://localhost:8080/api/marca";


  constructor() { }

  findAll(): Observable<Marca[]> {
    return this.http.get<Marca[]>(`${this.API_URL}/findAll`);
  }

  findById(id: number): Observable<Marca> {
    return this.http.get<Marca>(`${this.API_URL}/findById/${id}`)
  }

  save(marca: Marca): Observable<string> {
    return this.http.post<string>(`${this.API_URL}/save`, marca, {responseType: 'text' as 'json'});
  }

  update(marca: Marca, id: number): Observable<string> {
    return this.http.put<string>(`${this.API_URL}/update/${id}`, marca, {responseType: 'text' as 'json'});
  }

  deleteById(id: number): Observable<string> {
    return this.http.delete<string>(`${this.API_URL}/delete/${id}`, {responseType: 'text' as 'json'})
  }


}
