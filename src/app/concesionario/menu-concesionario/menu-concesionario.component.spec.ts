import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuConcesionarioComponent } from './menu-concesionario.component';

describe('MenuConcesionarioComponent', () => {
  let component: MenuConcesionarioComponent;
  let fixture: ComponentFixture<MenuConcesionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuConcesionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuConcesionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
