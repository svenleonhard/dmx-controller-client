import { TestBed } from '@angular/core/testing';

import { DmxControllerService } from './dmx-controller.service';

describe('DmxControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DmxControllerService = TestBed.get(DmxControllerService);
    expect(service).toBeTruthy();
  });
});
