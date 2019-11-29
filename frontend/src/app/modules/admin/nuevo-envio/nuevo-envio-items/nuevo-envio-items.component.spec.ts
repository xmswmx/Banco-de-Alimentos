import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEnvioItemsComponent } from './nuevo-envio-items.component';

describe('NuevoEnvioItemsComponent', () => {
  let component: NuevoEnvioItemsComponent;
  let fixture: ComponentFixture<NuevoEnvioItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoEnvioItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoEnvioItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
