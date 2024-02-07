import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  static sharedValue: string = "TEST";

  constructor() { }
}
