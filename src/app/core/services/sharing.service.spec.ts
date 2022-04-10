import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SharingService } from './sharing.service';

describe('SharingService', () => {
  let service: SharingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ], // Add HttpLientModule
      providers: [ SharingService ] // Add Service mocked to be tested using mockedValues
    });
    service = TestBed.inject(SharingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
