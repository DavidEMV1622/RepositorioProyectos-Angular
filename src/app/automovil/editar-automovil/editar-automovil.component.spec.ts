import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAutomovilComponent } from './editar-automovil.component';

describe('EditarAutomovilComponent', () => {
  let component: EditarAutomovilComponent;
  let fixture: ComponentFixture<EditarAutomovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAutomovilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAutomovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
