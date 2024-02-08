import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private api: string = environment.api;

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.api}/clients`).pipe(
      map(datas => datas.map(x => new Client(x))));
  }

  public getById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.api}/clients/${id}`).pipe(
      map(x => new Client(x)));
  }

}
