import { Component } from '@angular/core';
import { DmxControllerService } from './dmx-controller.service';
import { Fixture } from './dto/fixture';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DMX Controller Client';

  fixtures: Array<Fixture> = [];

  constructor(public controller: DmxControllerService) {

   }
}
