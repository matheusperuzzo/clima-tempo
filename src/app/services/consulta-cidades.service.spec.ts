/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConsultaCidadesService } from './consulta-cidades.service';

describe('Service: ConsultaCidades', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultaCidadesService]
    });
  });

  it('should ...', inject([ConsultaCidadesService], (service: ConsultaCidadesService) => {
    expect(service).toBeTruthy();
  }));
});
