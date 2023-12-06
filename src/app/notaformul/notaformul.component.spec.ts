import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaFormulComponent } from './notaformul.component';

describe('NotaFormulComponent', () => {
  let component: NotaFormulComponent;
  let fixture: ComponentFixture<NotaFormulComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotaFormulComponent]
    });
    fixture = TestBed.createComponent(NotaFormulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
