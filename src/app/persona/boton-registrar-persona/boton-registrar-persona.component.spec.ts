import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonRegistrarPersonaComponent } from './boton-registrar-persona.component';

describe('BotonRegistrarPersonaComponent', () => {
  let component: BotonRegistrarPersonaComponent;
  let fixture: ComponentFixture<BotonRegistrarPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonRegistrarPersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonRegistrarPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
