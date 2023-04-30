import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonRegistrarConcesionarioComponent } from './boton-registrar-concesionario.component';

describe('BotonRegistrarConcesionarioComponent', () => {
  let component: BotonRegistrarConcesionarioComponent;
  let fixture: ComponentFixture<BotonRegistrarConcesionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonRegistrarConcesionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonRegistrarConcesionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
