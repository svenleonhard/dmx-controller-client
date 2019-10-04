import { Channel } from './channel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DmxControllerService {
  url = 'http://192.168.178.37:3000';

  constructor(public http: HttpClient) {}

  refresh(): Observable<any> {
    console.log('call server');
    return this.http.get<any>(this.url);
  }

  update(channel: Channel): Observable<any> {
    console.log('send now');
    console.log(channel);
    return this.http.put<Channel>(this.url, channel);
  }
}
