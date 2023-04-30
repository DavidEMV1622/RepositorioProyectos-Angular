import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonRegistrarRolComponent } from './boton-registrar-rol.component';

describe('BotonRegistrarRolComponent', () => {
  let component: BotonRegistrarRolComponent;
  let fixture: ComponentFixture<BotonRegistrarRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonRegistrarRolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonRegistrarRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
