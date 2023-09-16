import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocalisationComponent } from './geolocalisation.component';

describe('GeolocalisationComponent', () => {
  let component: GeolocalisationComponent;
  let fixture: ComponentFixture<GeolocalisationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeolocalisationComponent]
    });
    fixture = TestBed.createComponent(GeolocalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
