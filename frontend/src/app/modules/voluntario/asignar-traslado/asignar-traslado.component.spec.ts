import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarTrasladoComponent } from './asignar-traslado.component';

describe('AsignarTrasladoComponent', () => {
  let component: AsignarTrasladoComponent;
  let fixture: ComponentFixture<AsignarTrasladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarTrasladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarTrasladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
