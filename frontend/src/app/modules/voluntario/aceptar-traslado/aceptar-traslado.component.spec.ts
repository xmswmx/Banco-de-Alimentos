import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AceptarTrasladoComponent } from './aceptar-traslado.component';

describe('AceptarTrasladoComponent', () => {
  let component: AceptarTrasladoComponent;
  let fixture: ComponentFixture<AceptarTrasladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceptarTrasladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceptarTrasladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
