import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVoluntarioComponent } from './editar-voluntario.component';

describe('EditarVoluntarioComponent', () => {
  let component: EditarVoluntarioComponent;
  let fixture: ComponentFixture<EditarVoluntarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarVoluntarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
