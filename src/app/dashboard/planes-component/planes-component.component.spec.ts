import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesComponentComponent } from './planes-component.component';

describe('PlanesComponentComponent', () => {
  let component: PlanesComponentComponent;
  let fixture: ComponentFixture<PlanesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
