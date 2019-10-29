import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilDonanteComponent } from './perfil-donante.component';

describe('PerfilDonanteComponent', () => {
  let component: PerfilDonanteComponent;
  let fixture: ComponentFixture<PerfilDonanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilDonanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilDonanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
