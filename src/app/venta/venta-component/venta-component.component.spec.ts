import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaComponentComponent } from './venta-component.component';

describe('VentaComponentComponent', () => {
  let component: VentaComponentComponent;
  let fixture: ComponentFixture<VentaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
