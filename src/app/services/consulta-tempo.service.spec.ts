/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConsultaTempoService } from './consulta-tempo.service';

describe('Service: ConsultaTempo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultaTempoService]
    });
  });

  it('should ...', inject([ConsultaTempoService], (service: ConsultaTempoService) => {
    expect(service).toBeTruthy();
  }));
});
