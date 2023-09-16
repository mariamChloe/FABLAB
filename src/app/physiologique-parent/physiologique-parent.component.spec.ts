import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysiologiqueParentComponent } from './physiologique-parent.component';

describe('PhysiologiqueParentComponent', () => {
  let component: PhysiologiqueParentComponent;
  let fixture: ComponentFixture<PhysiologiqueParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhysiologiqueParentComponent]
    });
    fixture = TestBed.createComponent(PhysiologiqueParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
