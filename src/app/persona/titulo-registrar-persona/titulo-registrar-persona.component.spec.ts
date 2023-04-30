import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloRegistrarPersonaComponent } from './titulo-registrar-persona.component';

describe('TituloRegistrarPersonaComponent', () => {
  let component: TituloRegistrarPersonaComponent;
  let fixture: ComponentFixture<TituloRegistrarPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloRegistrarPersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloRegistrarPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
