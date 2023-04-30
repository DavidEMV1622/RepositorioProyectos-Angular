import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAutomovilComponent } from './menu-automovil.component';

describe('MenuAutomovilComponent', () => {
  let component: MenuAutomovilComponent;
  let fixture: ComponentFixture<MenuAutomovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAutomovilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuAutomovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
