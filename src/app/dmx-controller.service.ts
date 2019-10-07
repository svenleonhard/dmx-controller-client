import { Channel } from './dto/channel';
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
  fixtures: Array<Fixture> = [];

  constructor(public http: HttpClient) {

    const channels1: Array<Channel> = [];

    channels1.push(new Channel('red', 0, 0));
    channels1.push(new Channel('green', 0, 1));
    channels1.push(new Channel('blue', 0, 2));

    const channels2: Array<Channel> = [];

    channels2.push(new Channel('red', 0, 3));
    channels2.push(new Channel('green', 0, 4));
    channels2.push(new Channel('blue', 0, 5));

    const channelNames = [
      'red, green', 'blue'
    ];

    const fixture: Fixture = new Fixture('LED Flood Panel 150', 'Stairville', 3, 0, channelNames);

    this.fixtures.push(fixture);
    this.fixtures.push(new Fixture('LED Flood Panel 150 40 deg', 'Stairville', 3, 0, channelNames));
    
    this.controller.push(new Device(fixture, 'LED Flood Panel 1', 1, 0, channels1));
    this.controller.push(new Device(fixture, 'LED Flood Panel 2', 4, 1, channels2));
  }

  getFixtureList(): Array<Fixture> {
    return this.fixtures;
  }

  getDeviceList(): Array<Device> {
    return this.controller;
  }

  addDevice(fixtureName: string, deviceName: string) {
    const fixture: Fixture = this.fixtures.find(fixture => fixture.name = fixtureName);
    const newDevice = new Device(fixture, deviceName, 0, 0, []);
    this.controller.push(newDevice);
    return this.controller;
  }

  removeDevice(device: Device) {
    this.controller.splice(device.id, 1);
    return this.controller;
  }

  generateRandomValues(device: Device): Observable<any> {
    return this.http.put<any>(this.url + 'random-values', device);
  }

  refresh(device: Device): Observable<any> {
    return this.http.put<any>(this.url, device);
  }

  update(channel: Channel): Observable<any> {
    console.log('update channel');
    return this.http.put<any>(this.url, channel);
  }
}
