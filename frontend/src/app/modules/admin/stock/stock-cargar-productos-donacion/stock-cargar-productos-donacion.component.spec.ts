import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCargarProductosDonacionComponent } from './stock-cargar-productos-donacion.component';

describe('StockCargarProductosDonacionComponent', () => {
  let component: StockCargarProductosDonacionComponent;
  let fixture: ComponentFixture<StockCargarProductosDonacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockCargarProductosDonacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockCargarProductosDonacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
