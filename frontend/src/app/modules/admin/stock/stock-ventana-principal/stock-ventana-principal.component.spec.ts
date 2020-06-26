import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockVentanaPrincipalComponent } from './stock-ventana-principal.component';

describe('StockVentanaPrincipalComponent', () => {
  let component: StockVentanaPrincipalComponent;
  let fixture: ComponentFixture<StockVentanaPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockVentanaPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockVentanaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
