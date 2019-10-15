import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDonanteComponent } from './form-donante.component';

describe('FormDonanteComponent', () => {
  let component: FormDonanteComponent;
  let fixture: ComponentFixture<FormDonanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDonanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDonanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
