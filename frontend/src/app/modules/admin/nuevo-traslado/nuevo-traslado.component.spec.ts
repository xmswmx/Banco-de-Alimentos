import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoTrasladoComponent } from './nuevo-traslado.component';

describe('NuevoTrasladoComponent', () => {
  let component: NuevoTrasladoComponent;
  let fixture: ComponentFixture<NuevoTrasladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoTrasladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoTrasladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
