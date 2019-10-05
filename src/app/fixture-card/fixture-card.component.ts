import { Device } from './../dto/device';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fixture-card',
  templateUrl: './fixture-card.component.html',
  styleUrls: ['./fixture-card.component.css']
})
export class FixtureCardComponent implements OnInit {

  @Input()
  public device: Device;

  @Output()
  public deviceRemoved = new EventEmitter<Device>();

  constructor() { }

  ngOnInit() {
  }

  onRemove() {
    this.deviceRemoved.emit(this.device);
  }

}
