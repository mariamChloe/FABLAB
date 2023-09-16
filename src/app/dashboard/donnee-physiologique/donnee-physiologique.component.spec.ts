import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonneePhysiologiqueComponent } from './donnee-physiologique.component';

describe('DonneePhysiologiqueComponent', () => {
  let component: DonneePhysiologiqueComponent;
  let fixture: ComponentFixture<DonneePhysiologiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonneePhysiologiqueComponent]
    });
    fixture = TestBed.createComponent(DonneePhysiologiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
