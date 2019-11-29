import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEnvioAPartirDeStockComponent } from './nuevo-envio-a-partir-de-stock.component';

describe('NuevoEnvioAPartirDeStockComponent', () => {
  let component: NuevoEnvioAPartirDeStockComponent;
  let fixture: ComponentFixture<NuevoEnvioAPartirDeStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoEnvioAPartirDeStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoEnvioAPartirDeStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
