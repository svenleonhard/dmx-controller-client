import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fixture-card',
  templateUrl: './fixture-card.component.html',
  styleUrls: ['./fixture-card.component.css']
})
export class FixtureCardComponent implements OnInit {

  @Input()
  public fixtureName: string;

  @Input()
  public startAddress: number;

  constructor() { }

  ngOnInit() {
  }

}
