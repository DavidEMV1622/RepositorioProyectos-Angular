import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloRegistrarAutomovilComponent } from './titulo-registrar-automovil.component';

describe('TituloRegistrarAutomovilComponent', () => {
  let component: TituloRegistrarAutomovilComponent;
  let fixture: ComponentFixture<TituloRegistrarAutomovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloRegistrarAutomovilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloRegistrarAutomovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
