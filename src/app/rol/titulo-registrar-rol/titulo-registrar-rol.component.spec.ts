import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloRegistrarRolComponent } from './titulo-registrar-rol.component';

describe('TituloRegistrarRolComponent', () => {
  let component: TituloRegistrarRolComponent;
  let fixture: ComponentFixture<TituloRegistrarRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloRegistrarRolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloRegistrarRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
