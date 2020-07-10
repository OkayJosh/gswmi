import { TestBed } from '@angular/core/testing';

import { CkeditorConfigService } from './ckeditor-config.service';

describe('CkeditorConfigService', () => {
  let service: CkeditorConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CkeditorConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
