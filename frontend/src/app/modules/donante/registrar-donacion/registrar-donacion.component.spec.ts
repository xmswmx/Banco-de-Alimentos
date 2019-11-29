import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarDonacionComponent } from './registrar-donacion.component';

describe('RegistrarDonacionComponent', () => {
  let component: RegistrarDonacionComponent;
  let fixture: ComponentFixture<RegistrarDonacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarDonacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarDonacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
