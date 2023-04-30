import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonRegistrarAutomovilComponent } from './boton-registrar-automovil.component';

describe('BotonRegistrarAutomovilComponent', () => {
  let component: BotonRegistrarAutomovilComponent;
  let fixture: ComponentFixture<BotonRegistrarAutomovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonRegistrarAutomovilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonRegistrarAutomovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
