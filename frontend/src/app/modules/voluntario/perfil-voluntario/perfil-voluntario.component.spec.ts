import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilVoluntarioComponent } from './perfil-voluntario.component';

describe('PerfilVoluntarioComponent', () => {
  let component: PerfilVoluntarioComponent;
  let fixture: ComponentFixture<PerfilVoluntarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilVoluntarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
