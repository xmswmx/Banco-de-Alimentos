import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesTrasladoComponent } from './solicitudes-traslado.component';

describe('SolicitudesTrasladoComponent', () => {
  let component: SolicitudesTrasladoComponent;
  let fixture: ComponentFixture<SolicitudesTrasladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudesTrasladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesTrasladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
