import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloRegistrarConcesionarioComponent } from './titulo-registrar-concesionario.component';

describe('TituloRegistrarConcesionarioComponent', () => {
  let component: TituloRegistrarConcesionarioComponent;
  let fixture: ComponentFixture<TituloRegistrarConcesionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloRegistrarConcesionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloRegistrarConcesionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
