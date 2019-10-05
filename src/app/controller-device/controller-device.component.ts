import { Channel } from './../dto/channel';
import { Device } from './../dto/device';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-controller-device',
  templateUrl: './controller-device.component.html',
  styleUrls: ['./controller-device.component.css']
})
export class ControllerDeviceComponent implements OnInit {

  channels: Array<Channel> = [];

  @Input()
  public device: Device;

  @Output()
  public randomButtonClicked = new EventEmitter<Device>();

  @Output()
  public dmxChanged = new EventEmitter<Channel>();

  constructor() { }

  ngOnInit() {
    this.channels = this.device.fixture.channels;
  }

  onButtonClick() {
    this.randomButtonClicked.emit(this.device);
  }

  onDmxChanged(channel: Channel) {
    this.dmxChanged.emit(channel);

    // this.controller.update(channel).subscribe();
  }

}
