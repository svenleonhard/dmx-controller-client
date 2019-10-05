import { Device } from './../dto/device';
import { Component, OnInit } from '@angular/core';
import { DmxControllerService } from '../dmx-controller.service';
import { Channel } from '../dto/channel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  devices: Array<Device>;

  constructor(public controller: DmxControllerService) {
    this.devices = controller.getDeviceList();
  }

  ngOnInit() {}

  onRandomButtonClicked(device: Device) {
    this.controller.refresh().subscribe(channels => (this.devices[device.id].fixture.channels = channels));
  }
}
