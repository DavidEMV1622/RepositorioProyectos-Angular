import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolComponentComponent } from './rol-component.component';

describe('RolComponentComponent', () => {
  let component: RolComponentComponent;
  let fixture: ComponentFixture<RolComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
