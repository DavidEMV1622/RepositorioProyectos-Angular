import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonRegistrarVentaComponent } from './boton-registrar-venta.component';

describe('BotonRegistrarVentaComponent', () => {
  let component: BotonRegistrarVentaComponent;
  let fixture: ComponentFixture<BotonRegistrarVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonRegistrarVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonRegistrarVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
