import { Carro } from './../models/carro';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  http = inject(HttpClient);

  API_URL = "http://localhost:8080/api/carro";

  constructor() { }

  findAll(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.API_URL+"/findAll");
  }

  findById(id: number): Observable<Carro> {
    return this.http.get<Carro>(this.API_URL+"/findById/"+id);
  }

  save(carro: Carro): Observable<String> {
    return this.http.post<String>(this.API_URL+"/save", carro, {responseType: 'text' as 'json'});
  }

  update(carro: Carro, id: number): Observable<string> {
    return this.http.put<string>(this.API_URL+"/update/"+id, carro, {responseType: 'text' as 'json'});
  }

  deleteById(id: number): Observable<string> {
    return this.http.delete<string>(this.API_URL+"/delete/"+id, {responseType: 'text' as 'json'});
  }
}
