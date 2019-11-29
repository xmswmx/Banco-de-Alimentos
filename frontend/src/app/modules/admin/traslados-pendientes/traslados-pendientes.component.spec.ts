import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasladosPendientesComponent } from './traslados-pendientes.component';

describe('TrasladosPendientesComponent', () => {
  let component: TrasladosPendientesComponent;
  let fixture: ComponentFixture<TrasladosPendientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrasladosPendientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrasladosPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
