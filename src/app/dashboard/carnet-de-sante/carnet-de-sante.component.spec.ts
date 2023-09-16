import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnetDeSanteComponent } from './carnet-de-sante.component';

describe('CarneDeSanteComponent', () => {
  let component: CarnetDeSanteComponent;
  let fixture: ComponentFixture<CarnetDeSanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarnetDeSanteComponent]
    });
    fixture = TestBed.createComponent(CarnetDeSanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
