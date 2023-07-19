/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PieChartService } from './pie-chart.service';

describe('Service: PieChart', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PieChartService]
    });
  });

  it('should ...', inject([PieChartService], (service: PieChartService) => {
    expect(service).toBeTruthy();
  }));
});
