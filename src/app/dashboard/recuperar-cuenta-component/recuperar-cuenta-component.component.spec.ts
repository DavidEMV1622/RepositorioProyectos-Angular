import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarCuentaComponentComponent } from './recuperar-cuenta-component.component';

describe('RecuperarCuentaComponentComponent', () => {
  let component: RecuperarCuentaComponentComponent;
  let fixture: ComponentFixture<RecuperarCuentaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuperarCuentaComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuperarCuentaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
