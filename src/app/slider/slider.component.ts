import { Channel } from '../dto/channel';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input()
  public channel: Channel;

  @Output()
  public dmxChanged = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onSliderChanged(sliderValues) {
    this.channel.value = sliderValues.newValue;
    this.dmxChanged.emit(this.channel);
  }

  onDmxChanged() {
    this.dmxChanged.emit(this.channel);
  }

}
