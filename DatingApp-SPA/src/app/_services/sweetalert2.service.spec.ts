/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Sweetalert2Service } from './sweetalert2.service';

describe('Service: Sweetalert2', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Sweetalert2Service]
    });
  });

  it('should ...', inject([Sweetalert2Service], (service: Sweetalert2Service) => {
    expect(service).toBeTruthy();
  }));
});
