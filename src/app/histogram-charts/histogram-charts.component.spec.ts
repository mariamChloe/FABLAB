import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistogramChartsComponent } from './histogram-charts.component';

describe('HistogramChartsComponent', () => {
  let component: HistogramChartsComponent;
  let fixture: ComponentFixture<HistogramChartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistogramChartsComponent]
    });
    fixture = TestBed.createComponent(HistogramChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
