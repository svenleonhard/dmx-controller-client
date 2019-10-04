import { Channel } from './../channel';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input()
  channel: Channel;

  constructor() { }

  ngOnInit() {
  }

  dmxChanged() {
    console.log(this.channel.value);
  }

}
