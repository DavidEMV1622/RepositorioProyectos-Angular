import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConcesionarioComponent } from './editar-concesionario.component';

describe('EditarConcesionarioComponent', () => {
  let component: EditarConcesionarioComponent;
  let fixture: ComponentFixture<EditarConcesionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarConcesionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarConcesionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
