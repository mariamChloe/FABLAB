import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesPatientsComponent } from './liste-des-patients.component';

describe('ListeDesPatientsComponent', () => {
  let component: ListeDesPatientsComponent;
  let fixture: ComponentFixture<ListeDesPatientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDesPatientsComponent]
    });
    fixture = TestBed.createComponent(ListeDesPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
