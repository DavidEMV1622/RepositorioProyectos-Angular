import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuVentaComponent } from './menu-venta.component';

describe('MenuVentaComponent', () => {
  let component: MenuVentaComponent;
  let fixture: ComponentFixture<MenuVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
