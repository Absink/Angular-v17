import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private pCollection!: Observable<User[]>;
  private api: string = environment.api;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<User[]>(`${this.api}/users`).pipe(
      map(datas => datas.map(
        obj => new User(obj))));
  }

  // Getters / Setters
  get collection(): Observable<User[]> {
    return this.pCollection;
  }

  set collection(col: Observable<User[]>) {
    this.pCollection = col;
  }


  public authenficate(user: User): Observable<User[]> {
    // request
    return this.http.get<User[]>(`${this.api}/users?username=${user.username}&password=${user.password}`).pipe(
      map(datas => datas.map(
        obj => new User(obj))));
  }
}
