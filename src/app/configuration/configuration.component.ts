import { Device } from './../dto/device';
import { Component, OnInit } from '@angular/core';
import { DmxControllerService } from '../dmx-controller.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  devices: Array<Device>;

  constructor(public controller: DmxControllerService) {
    this.devices = controller.getDeviceList();
   }

  ngOnInit() {
  }

  onDeviceRemoved(device: Device) {
    this.controller.removeDevice(device);
  }

}
