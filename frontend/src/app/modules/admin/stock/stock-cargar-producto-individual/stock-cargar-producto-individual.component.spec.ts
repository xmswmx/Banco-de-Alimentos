import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCargarProductoIndividualComponent } from './stock-cargar-producto-individual.component';

describe('StockCargarProductoIndividualComponent', () => {
  let component: StockCargarProductoIndividualComponent;
  let fixture: ComponentFixture<StockCargarProductoIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockCargarProductoIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockCargarProductoIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
