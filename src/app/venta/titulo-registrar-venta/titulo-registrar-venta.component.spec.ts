import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloRegistrarVentaComponent } from './titulo-registrar-venta.component';

describe('TituloRegistrarVentaComponent', () => {
  let component: TituloRegistrarVentaComponent;
  let fixture: ComponentFixture<TituloRegistrarVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloRegistrarVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloRegistrarVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
