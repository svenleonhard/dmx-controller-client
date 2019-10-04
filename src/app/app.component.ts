import { Channel } from './channel';
import { Component } from '@angular/core';
import { DmxControllerService } from './dmx-controller.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dmx-controller-client';
  dmxResponse$: Observable<any>;

  channels: Array<Channel> = [];

  constructor(public controller: DmxControllerService) {
    this.channels.push(new Channel('red', 0, 1));
    this.channels.push(new Channel('green', 0, 2));
    this.channels.push(new Channel('blue', 0, 3));
  }

  onButtonClick() {
    console.log('button clicked');
    this.controller.refresh().subscribe();
  }

  onDmxChanged(channel: Channel) {
    console.log('changed');
    console.log(channel);
    console.log(this.controller.update(channel).subscribe());
  }
}
