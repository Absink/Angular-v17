import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // static sharedValue: string = "TEST";
  static isConnected: boolean = true;

  constructor() { }
}
