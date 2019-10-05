import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerDeviceComponent } from './controller-device.component';

describe('ControllerDeviceComponent', () => {
  let component: ControllerDeviceComponent;
  let fixture: ComponentFixture<ControllerDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllerDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
