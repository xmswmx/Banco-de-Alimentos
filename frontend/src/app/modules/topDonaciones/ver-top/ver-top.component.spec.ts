import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTopComponent } from './ver-top.component';

describe('VerTopComponent', () => {
  let component: VerTopComponent;
  let fixture: ComponentFixture<VerTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
