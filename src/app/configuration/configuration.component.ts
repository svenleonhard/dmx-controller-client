import { Device } from './../dto/device';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { DmxControllerService } from '../dmx-controller.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { Fixture } from '../dto/fixture';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  modalRef: BsModalRef;
  devices: Array<Device>;
  fixtures: Array<Fixture>;
  selectedFixture: string;
  deviceName: string;


  constructor(public controller: DmxControllerService, private modalService: BsModalService) {
    this.devices = controller.getDeviceList();
    this.fixtures = controller.getFixtureList();
    this.selectedFixture = this.fixtures[0].name;
    this.deviceName = this.fixtures[0].name;
   }


   openModal(template: TemplateRef<any>) {
     this.modalRef = this.modalService.show(template);
   }

  ngOnInit() {
  }

  onDeviceRemoved(device: Device) {
    this.devices = this.controller.removeDevice(device);
  }

  onSelection() {
    console.log('selection');
    this.deviceName = this.selectedFixture;
  }

  onCancelAddDevice() {
    this.modalRef.hide();
  }

  onDeviceAdded() {
    console.log('added device');
    console.log(this.selectedFixture);
    console.log(this.deviceName);
    this.modalRef.hide();
    this.devices = this.controller.addDevice(this.selectedFixture, this.deviceName);
  }

}
