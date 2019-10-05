import { Component, OnInit } from '@angular/core';
import { DmxControllerService } from '../dmx-controller.service';
import { Channel } from '../channel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  channels: Array<Channel> = [];

  constructor(public controller: DmxControllerService) {
    this.channels.push(new Channel('red', 0, 1));
    this.channels.push(new Channel('green', 0, 2));
    this.channels.push(new Channel('blue', 0, 3));
  }

  onButtonClick() {
    this.controller.refresh().subscribe(
      channels => this.channels = channels
    );
  }

  onDmxChanged(channel: Channel) {
    this.controller.update(channel).subscribe();
  }

  ngOnInit() {
  }

}
