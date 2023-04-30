import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaComponentComponent } from './persona-component.component';

describe('PersonaComponentComponent', () => {
  let component: PersonaComponentComponent;
  let fixture: ComponentFixture<PersonaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
