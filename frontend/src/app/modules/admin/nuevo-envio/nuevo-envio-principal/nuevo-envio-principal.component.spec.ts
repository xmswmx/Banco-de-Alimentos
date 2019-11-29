import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEnvioPrincipalComponent } from './nuevo-envio-principal.component';

describe('NuevoEnvioPrincipalComponent', () => {
  let component: NuevoEnvioPrincipalComponent;
  let fixture: ComponentFixture<NuevoEnvioPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoEnvioPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoEnvioPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
