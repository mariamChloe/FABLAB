import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarParentComponent } from './dashboar-parent.component';

describe('DashboarParentComponent', () => {
  let component: DashboarParentComponent;
  let fixture: ComponentFixture<DashboarParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboarParentComponent]
    });
    fixture = TestBed.createComponent(DashboarParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
