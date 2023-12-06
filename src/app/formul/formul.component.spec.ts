import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulComponent } from './formul.component';

describe('FormulComponent', () => {
  let component: FormulComponent;
  let fixture: ComponentFixture<FormulComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulComponent]
    });
    fixture = TestBed.createComponent(FormulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
