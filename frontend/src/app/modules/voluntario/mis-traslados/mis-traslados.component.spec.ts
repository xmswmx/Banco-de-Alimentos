import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisTrasladosComponent } from './mis-traslados.component';

describe('MisTrasladosComponent', () => {
  let component: MisTrasladosComponent;
  let fixture: ComponentFixture<MisTrasladosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisTrasladosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisTrasladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
