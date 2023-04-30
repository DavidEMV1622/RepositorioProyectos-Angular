import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPersonaComponent } from './menu-persona.component';

describe('MenuPersonaComponent', () => {
  let component: MenuPersonaComponent;
  let fixture: ComponentFixture<MenuPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
