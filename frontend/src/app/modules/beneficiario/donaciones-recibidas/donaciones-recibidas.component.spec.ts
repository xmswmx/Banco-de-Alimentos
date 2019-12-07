import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonacionesRecibidasComponent } from './donaciones-recibidas.component';

describe('DonacionesRecibidasComponent', () => {
  let component: DonacionesRecibidasComponent;
  let fixture: ComponentFixture<DonacionesRecibidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonacionesRecibidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonacionesRecibidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
