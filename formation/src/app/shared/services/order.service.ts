import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Order } from '../models/order.model';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private pCollection!: Observable<Order[]>;
  private api: string = environment.api;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.api}/orders`).pipe(
      map(datas => datas.map(
        obj => new Order(obj))));
  }

  // Getters / Setters
  get collection(): Observable<Order[]> {
    return this.pCollection;
  }

  set collection(col: Observable<Order[]>) {
    this.pCollection = col;
  }



  public getById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.api}/orders/${id}`).pipe(
      map(x => new Order(x)));

  }

}
