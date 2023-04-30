import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAutomovilComponent } from './form-automovil.component';

describe('FormAutomovilComponent', () => {
  let component: FormAutomovilComponent;
  let fixture: ComponentFixture<FormAutomovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAutomovilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAutomovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
