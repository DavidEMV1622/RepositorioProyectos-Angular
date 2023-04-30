import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomovilComponentComponent } from './automovil-component.component';

describe('AutomovilComponentComponent', () => {
  let component: AutomovilComponentComponent;
  let fixture: ComponentFixture<AutomovilComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomovilComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomovilComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
