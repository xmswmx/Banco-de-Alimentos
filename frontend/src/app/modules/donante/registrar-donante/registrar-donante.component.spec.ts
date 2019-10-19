import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarDonanteComponent } from './registrar-donante.component';

describe('RegistrarDonanteComponent', () => {
  let component: RegistrarDonanteComponent;
  let fixture: ComponentFixture<RegistrarDonanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarDonanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarDonanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
