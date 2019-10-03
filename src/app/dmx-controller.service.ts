import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DmxControllerService {

  constructor(public http: HttpClient) { }

  refresh(): Observable<any> {
    console.log('call server');
    return this.http
      .get<any>(`http://192.168.178.37:3000`);
  }
}
