import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcesionarioComponentComponent } from './concesionario-component.component';

describe('ConcesionarioComponentComponent', () => {
  let component: ConcesionarioComponentComponent;
  let fixture: ComponentFixture<ConcesionarioComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcesionarioComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcesionarioComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
