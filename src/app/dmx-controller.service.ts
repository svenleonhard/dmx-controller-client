import { Channel } from './channel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fixture } from './dto/fixture';
import { Device } from './dto/device';

@Injectable({
  providedIn: 'root'
})
export class DmxControllerService {
  url = 'http://192.168.178.37:3000/';

  controller: Array<Device> = [];

  constructor(public http: HttpClient) {

    const fixture: Fixture = new Fixture('LED Flood Panel 150', 'Stairville', 3, 0);

    this.controller.push(new Device(fixture, 'LED Flood Panel 1', 1, 0));
    this.controller.push(new Device(fixture, 'LED Flood Panel 2', 4, 1));
  }

  getDeviceList(): Array<Device> {
    return this.controller;
  }

  removeDevice(device: Device) {
    delete this.controller[device.id];
  }

  refresh(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  update(channel: Channel): Observable<any> {
    return this.http.put<any>(this.url, channel);
  }
}
