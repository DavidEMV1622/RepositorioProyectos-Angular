import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloActualizarPersonaComponent } from './titulo-actualizar-persona.component';

describe('TituloActualizarPersonaComponent', () => {
  let component: TituloActualizarPersonaComponent;
  let fixture: ComponentFixture<TituloActualizarPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloActualizarPersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloActualizarPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
