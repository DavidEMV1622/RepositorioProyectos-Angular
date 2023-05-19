import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionComponentComponent } from './presentacion-component.component';

describe('PresentacionComponentComponent', () => {
  let component: PresentacionComponentComponent;
  let fixture: ComponentFixture<PresentacionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentacionComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentacionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
