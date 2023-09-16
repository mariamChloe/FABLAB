import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginParentComponent } from './login-parent.component';

describe('LoginParentComponent', () => {
  let component: LoginParentComponent;
  let fixture: ComponentFixture<LoginParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginParentComponent]
    });
    fixture = TestBed.createComponent(LoginParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
