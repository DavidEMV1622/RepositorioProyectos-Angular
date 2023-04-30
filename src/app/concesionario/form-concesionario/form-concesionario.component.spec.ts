import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConcesionarioComponent } from './form-concesionario.component';

describe('FormConcesionarioComponent', () => {
  let component: FormConcesionarioComponent;
  let fixture: ComponentFixture<FormConcesionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormConcesionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormConcesionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
