import { Component } from '@angular/core';
import { DmxControllerService } from './dmx-controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DMX Controller Client';
  constructor(public controller: DmxControllerService) { }
}
