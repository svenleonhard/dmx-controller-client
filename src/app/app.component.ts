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

  constructor(public controller: DmxControllerService) {}

  onButtonClick() {
    console.log('button clicked');
    this.controller.refresh().subscribe();
  }
}
