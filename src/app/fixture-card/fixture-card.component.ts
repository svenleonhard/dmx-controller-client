import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Device } from './../dto/device';
import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-fixture-card',
  templateUrl: './fixture-card.component.html',
  styleUrls: ['./fixture-card.component.css']
})
export class FixtureCardComponent implements OnInit {
  modalRef: BsModalRef;

  @Input()
  public device: Device;

  @Output()
  public deviceRemoved = new EventEmitter<Device>();

  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {}

  onRemove() {
    this.deviceRemoved.emit(this.device);
    this.modalRef.hide();
  }
}
